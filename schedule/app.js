$(document).ready(function() {

   $('#tab').click(function() {
    if ( $(this).hasClass("isRight") ) {
     $('#vod').animate({top:'0'}, 1000, function() {
       $('#tab').animate({left:'1140px'});
       $('.direct').animate({left:'787px'});
      });
     $('#sched').animate({top:'0'}, 1000);
    } else {
     $('#tab').animate({left:'1500px'}, function() {
       $('#sched').animate({top:'44px'}, 1000);
       $('#vod').animate({top:'88px'}, 1000);
      });
     $('.direct').animate({left:'1147px'});
    }
    $(this).toggleClass('isRight');
    return false;
   });

   $('#twitchbutton').hover(function() {
    $(this).attr('src', '/assets/twitch2.png');
  }, function() {
    $(this).attr('src', '/assets/twitch.png');
  });

   $('#twitterbutton').hover(function() {
    $(this).attr('src', '/assets/twitter2.png');
  }, function() {
    $(this).attr('src', '/assets/twitter.png');
  });

   $('#facebookbutton').hover(function() {
    $(this).attr('src', '/assets/facebook2.png');
  }, function() {
    $(this).attr('src', '/assets/facebook.png');
  });

   $('#instagrambutton').hover(function() {
    $(this).attr('src', '/assets/instagram2.png');
  }, function() {
    $(this).attr('src', '/assets/instagram.png');
  });

   $('#youtubebutton').hover(function() {
    $(this).attr('src', '/assets/youtube2.png');
  }, function() {
    $(this).attr('src', '/assets/youtube.png');
  });

  Twitch.init({clientId: '1lds253cl6eyaxwho81es7k1k1vunel'}, function(error, status) {
  if (error) {
    // error encountered while loading
    console.log(error);
  }
  // the sdk is now loaded
  if (status.authenticated) {
    // user is currently logged in
    $('.twitch-logout').show();
  } else {
    $('.twitch-connect').show();
  }
});

$('.twitch-connect').click(function() {
  Twitch.login({
    scope: ['user_read', 'channel_read']
  });
})

$('.twitch-logout').click(function() {
  Twitch.logout(function(error) {
    // the user is now logged out
  Twitch.getStatus({force: true}, function(err, status) {
  if (status.authenticated) {
    console.log('authenticated!')
  };
 });
 });
});

});



