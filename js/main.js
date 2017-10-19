jQuery(function($) {'use strict',



	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// --------------Contact Form Ajax request-----------------------

    $('.form-group').on('submit', function(event){
    event.preventDefault();

    $this = $(this);

    var data = {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };

    $.ajax({
      type: "POST",
      url: "email.php",
      data: data,
      success: function(msg){
	     $('.contact-success').fadeIn().delay(3000).fadeOut();
      }
    });
  });

});
	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 300);
	});	


//shut down menu
$(
 '.navbar-collapse ul li a').click(function() {
         $('.navbar-collapse').collapse('hide');
 })

 //wapp button
 jQuery(document).ready(function() {
 
var offset = 100;
 
var duration = 300;
 
jQuery(window).scroll(function() {
 
if (jQuery(this).scrollTop() > offset) {
 
jQuery(‘.back-to-top’).fadeIn(duration);
 
} else {
 
jQuery(‘.back-to-top’).fadeOut(duration);
 
}
 
});
 
 
 
jQuery(‘.back-to-top’).click(function(event) {
 
event.preventDefault();
 
jQuery(‘html, body’).animate({scrollTop: 0}, duration);
 
return false;
 
})
 
});
 gtag('set', {'user_id': 'USER_ID'}); // Establezca el ID de usuario mediante el user_id con el que haya iniciado sesión.

 
// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});