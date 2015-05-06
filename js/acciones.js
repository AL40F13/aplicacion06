// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on('tap',
	function(){
		navigator.vibrate(1000);
	});//tap a btnvibrar
	$('#btnbeep').on('tap', 
	function(){
		navigator.notification.beep(1); 
	});//tap a btnbeep
	$('#izquierda').on('swipeleft',
	function(){
		alert("Barrio a la izquierda")
	});//swipe left
	$('#derecha').on ('swiperight',
	function(){
		alert("Barrio a la derecha")
	});//swipe right
	document.addEventListener("pause",function(){
	$('#listado').append("<p> Su aplicacion se pauso </p>");
	});//apped pause
	document.addEventListener("resume",function (){
	$('#listado').apped("<p> Se reinicio su aplicacion </p>");
	});//apped resume
	$(window).on ('orientationchange',function (e){
		$('#listado').apped("<p>Orientacion: " + e.orientation + "</p>")
	});//window
}); 
});

