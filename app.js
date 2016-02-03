$(document).ready(function() {

   $('.home').mouseenter(function() {
    $('#home').fadeTo( '300', 0);
    $('#home2').fadeTo( '300', 1);
   });

   $('.home').mouseleave(function() {
    $('#home2').fadeTo( '300', 0);
    $('#home').fadeTo( '300', 1);
   });

   $('.vod').mouseenter(function() {
    $('#vod').fadeTo( '300', 0);
    $('#vod2').fadeTo( '300', 1);
   });

   $('.vod').mouseleave(function() {
    $('#vod2').fadeTo( '300', 0);
    $('#vod').fadeTo( '300', 1);
   });

   $('.sched').mouseenter(function() {
    $('#sched').fadeTo( '300', 0);
    $('#sched2').fadeTo( '300', 1);
   });

   $('.sched').mouseleave(function() {
    $('#sched2').fadeTo( '300', 0);
    $('#sched').fadeTo( '300', 1);
   });

   $('.faq').mouseenter(function() {
    $('#faq').fadeTo( '300', 0);
    $('#faq2').fadeTo( '300', 1);
   });

   $('.faq').mouseleave(function() {
    $('#faq2').fadeTo( '300', 0);
    $('#faq').fadeTo( '300', 1);
   });

   $('.comp').mouseenter(function() {
    $('#comp').fadeTo( '300', 0);
    $('#comp2').fadeTo( '300', 1);
   });

   $('.comp').mouseleave(function() {
    $('#comp2').fadeTo( '300', 0);
    $('#comp').fadeTo( '300', 1);
   });
});



