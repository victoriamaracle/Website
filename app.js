$(document).ready(function() {
  $('.twitchbutton img').hover(function() {
    $(this).attr('src', '/assets/twitch2.png');
  }, function() {
    $(this).attr('src', '/assets/twitch.png');
  });

   $('.twitterbutton img').hover(function() {
    $(this).attr('src', '/assets/twitter2.png');
  }, function() {
    $(this).attr('src', '/assets/twitter.png');
  });

   $('.facebookbutton img').hover(function() {
    $(this).attr('src', '/assets/facebook2.png');
  }, function() {
    $(this).attr('src', '/assets/facebook.png');
  });

   $('.instagrambutton img').hover(function() {
    $(this).attr('src', '/assets/instagram2.png');
  }, function() {
    $(this).attr('src', '/assets/instagram.png');
  });

   $('.youtubebutton img').hover(function() {
    $(this).attr('src', '/assets/youtube2.png');
  }, function() {
    $(this).attr('src', '/assets/youtube.png');
  });
});

$('.twitch-connect').click(function() {
  Twitch.login({
    scope: ['user_read', 'channel_read']
    if (status.authenticated) {
  // Already logged in, hide button
  $('.twitch-connect').hide()
   }
  });
})