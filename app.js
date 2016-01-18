$(document).ready(function() {
  $('.socialcontainer #1').hover(function() {
    $(this).attr('src', '/assets/twitch2.png');
  }, function() {
    $(this).attr('src', '/assets/twitch.png');
  });

   $('.socialcontainer #2').hover(function() {
    $(this).attr('src', '/assets/twitter2.png');
  }, function() {
    $(this).attr('src', '/assets/twitter.png');
  });

   $('.socialcontainer #3').hover(function() {
    $(this).attr('src', '/assets/facebook2.png');
  }, function() {
    $(this).attr('src', '/assets/facebook.png');
  });

   $('.socialcontainer #4').hover(function() {
    $(this).attr('src', '/assets/instagram2.png');
  }, function() {
    $(this).attr('src', '/assets/instagram.png');
  });

   $('.socialcontainer #5').hover(function() {
    $(this).attr('src', '/assets/youtube2.png');
  }, function() {
    $(this).attr('src', '/assets/youtube.png');
  });
});

$('.twitch-connect').click(function() {
  Twitch.login({
    scope: ['user_read', 'channel_read']
  });
})

    if (status.authenticated) {
  // Already logged in, hide button
  $('.twitch-connect').hide()
   }
