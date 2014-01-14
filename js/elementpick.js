$(document).ready(function () {

	var paint = ""
	var paint2 = "white"
	$(".color").on("click", function () {paint = $(this).css('background-image');paint2 = $(this).css('background-color');})

	 $('.row').on('click', function () {
		$(this).css("background-color", paint2 );
		$(this).css("background-image", paint );
	 });
	
 
 
		
});