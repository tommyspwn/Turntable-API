/**
 * Each time a song starts, the bot vote up.
 * WARNING: Turntable no longer allows bots that autobop. This script is provided for educational purposes only.
 * For more information, visit http://faq.turntable.fm/customer/portal/articles/258935
 */

var Bot    = require('ttapi);
var AUTH   = 'auth+live+LryxXvVGOAHKfNKtwaRNUlQP';
var USERID = '50874b1feb35c174010000da';
var ROOMID = '4e29cefc14169c27bf255fad';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('newsong', function (data) { bot.bop(); });
