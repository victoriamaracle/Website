var main = ['chat', 'emote', 'emoteimg', 'badges', 'stream'];

var chat = ('https://api.twitch.tv/kraken/chat/gurlsrbadatvidyagaems');
var emote = ('https://api.twitch.tv/kraken/chat/emoticons');
var emoteimg = ('https://api.twitch.tv/kraken/chat/emoticon_images');
var badges = ('https://api.twitch.tv/kraken/chat/gurlsrbadatvidyagaems/badges');
var stream = ('https://api.twitch.tv/kraken/streams/gurlsrbadatvidyagaems');

$.getJSON ('main');

$(document).ready(main);

$Twitch.init({clientId: '1lds253cl6eyaxwho81es7k1k1vunel'}, function(error, status) {
  if (error) {
    // error encountered while loading
    console.log(error);
  }
  // the sdk is now loaded
  if (status.authenticated) {
    // user is currently logged in
  }
});



