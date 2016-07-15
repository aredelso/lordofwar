$(window).load(function() {
	 $(".loader").fadeOut("slow");
})

// var deadline = 'Jul 08 2016 00:00:01 GMT-0700';
// function time_remaining(endtime){
// 	var t = Date.parse(endtime) - Date.parse(new Date());
// 	var seconds = Math.floor( (t/1000) % 60 );
// 	var minutes = Math.floor( (t/1000/60) % 60 );
// 	var hours = Math.floor( (t/(1000*60*60)) % 24 );
// 	var days = Math.floor( t/(1000*60*60*24) );
// 	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
// }
// function run_clock(id,endtime){
// 	var clock = document.getElementById(id);
//
// 	// get spans where our clock numbers are held
// 	var days_span = clock.querySelector('.days');
// 	var hours_span = clock.querySelector('.hours');
// 	var minutes_span = clock.querySelector('.minutes');
// 	var seconds_span = clock.querySelector('.seconds');
//
// 	function update_clock(){
// 		var t = time_remaining(endtime);
//
// 		// update the numbers in each part of the clock
// 		days_span.innerHTML = t.days;
// 		hours_span.innerHTML = ('0' + t.hours).slice(-2);
// 		minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
// 		seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
//
// 		if(t.total<=0){ clearInterval(timeinterval); }
// 	}
// 	update_clock();
// 	var timeinterval = setInterval(update_clock,1000);
// }
// run_clock('clockdiv',deadline);

$(document).ready(function() {
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'audio/creep.mp3');
	audioElement.setAttribute('autoplay', 'autoplay');
	audioElement.setAttribute('loop', 'loop');
	//audioElement.load()

	$.get();

	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);

	$('.fa').click(function() {
		if(!audioElement.paused) {
			audioElement.pause();
			$(this).addClass('fa-play');
			$(this).removeClass('fa-pause');
		} else {
			audioElement.play();
			$(this).addClass('fa-pause');
			$(this).removeClass('fa-play');
		}
	});

	// var nexusVideo = document.createElement('iframe'):
	// nexusVideo.setAttribute('width', '560px');
	// nexusVideo.setAttribute('height', '315px');
	// nexusVideo.setAttribute('src', 'https://www.youtube.com/embed/P8cYTkvx4_g');
	// nexusVideo.setAttribute('frameborder', '0');
	// nexusVideo.setAttribute('allowfullscreen');
	//
	// $.get();
	//
	// nexusVideo.addEventListener("load", function() {
	// 	nexusVideo.play();
	// }, false);

});
