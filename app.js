$(document).ready(function() {

   $('.home').mouseenter(function() {
    $('#home').fadeTo( '300', 0);
    $('#home2').fadeTo( '400', 1);
   });

   $('.home').mouseleave(function() {
    $('#home2').fadeTo( '300', 0);
    $('#home').fadeTo( '400', 1);
   });

   $('.vod').mouseenter(function() {
    $('#vod').fadeTo( '300', 0);
    $('#vod2').fadeTo( '400', 1);
   });

   $('.vod').mouseleave(function() {
    $('#vod2').fadeTo( '300', 0);
    $('#vod').fadeTo( '400', 1);
   });

   $('.sched').mouseenter(function() {
    $('#sched').fadeTo( '300', 0);
    $('#sched2').fadeTo( '400', 1);
   });

   $('.sched').mouseleave(function() {
    $('#sched2').fadeTo( '300', 0);
    $('#sched').fadeTo( '400', 1);
   });

   $('.faq').mouseenter(function() {
    $('#faq').fadeTo( '300', 0);
    $('#faq2').fadeTo( '400', 1);
   });

   $('.faq').mouseleave(function() {
    $('#faq2').fadeTo( '300', 0);
    $('#faq').fadeTo( '400', 1);
   });

   $('.comp').mouseenter(function() {
    $('#comp').fadeTo( '300', 0);
    $('#comp2').fadeTo( '400', 1);
   });

   $('.comp').mouseleave(function() {
    $('#comp2').fadeTo( '300', 0);
    $('#comp').fadeTo( '400', 1);
   });

   $('.discord').mouseenter(function() {
    $('#discord').fadeTo( '300', 0);
    $('#discord2').fadeTo( '400', 1);
   });

   $('.discord').mouseleave(function() {
    $('#discord2').fadeTo( '300', 0);
    $('#discord').fadeTo( '400', 1);
   });

   $('.social').mouseenter(function() {
    $('#social').fadeTo( '300', 0);
    $('#social2').fadeTo( '400', 1);
   });

   $('.social').mouseleave(function() {
    $('#social2').fadeTo( '300', 0);
    $('#social').fadeTo( '400', 1);
   });

   $('.pull').click(function() {
    if ( $(this).hasClass("isDown") ) {
     $('.home, .vod, .sched, .faq, .comp, .discord, .social, .twitch, .twitter, .instagram, .facebook, .youtube').animate({top:'-55px'});
     $('.down').animate({top:'-=50px'});
    } else {
     $('.home, .vod, .sched, .faq, .comp, .discord, .social, .twitch, .twitter, .instagram, .facebook, .youtube').animate({top:'0'});
     $('.down').animate({top:'+=50px'});
    }
    $(this).toggleClass('isDown');
    return false;
   });

   $('.social').click(function() {
    if ( $(this).hasClass("isOut") ) {
     $('.twitch, .twitter, .instagram, .facebook, .youtube').animate({top:'0'});
    } else {
     $('.twitch').animate({top:'+=50px'});
     $('.twitter').animate({top:'+=100px'});
     $('.instagram').animate({top:'+=150px'});
     $('.facebook').animate({top:'+=200px'});
     $('.youtube').animate({top:'+=250px'});
    }
    $(this).toggleClass('isOut');
    return false;
   });
});



