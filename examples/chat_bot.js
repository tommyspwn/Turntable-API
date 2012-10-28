var Bot    = require('ttapi);
var AUTH   = 'auth+live+LryxXvVGOAHKfNKtwaRNUlQP';
var USERID = '50874b1feb35c174010000da';
var ROOMID = '4e29cefc14169c27bf255fad';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('speak', function (data) {
  // Get the data
  var name = data.name;
  var text = data.text;

  // Respond to "/hello" command
  if (text.match(/^\/hello$/)) {
    bot.speak('Hey! How are you @'+name+'?');
  }
});
