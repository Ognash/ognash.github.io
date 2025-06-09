( function($) {
		"use strict";

		// Bootstrap scrollspy more option check bootstrap documentation
		$('body').scrollspy({
			target : '.navbar',
			offset : 200
		});

		$('.navbar .nav li > a, .btn-location').on("click", function(e) {

			var target = this.hash;
			e.preventDefault();
			$('body').scrollTo(target, 800, {
				offset : -50,
				'axis' : 'y'
			});

		});

		// Countdown Settings
		var dateDemo = new Date();
		// date countdown format (yyyy/m/d)
		$("#countdown").countdown((dateDemo.getFullYear() + 1) + "/" + (dateDemo.getMonth() + 1) + "/" + dateDemo.getDate(), function(e) {
			var $this = $(this).html(e.strftime('<ul>' + '<li>%D <span>days</span></li> ' + '<li>%H <span>hours</span></li> ' + '<li>%M <span>minutes</span></li> ' + '<li>%S <span>seconds</span></li> ' + '</ul>'));

		});

		// Map Setting
		var map = new GMaps({
			div : '#map',
			lat : -6.1753871,
			lng : 106.8249641,
			scrollwheel : false
		});

		map.addMarker({
			lat : -6.1753871,
			lng : 106.8249641,
			title : 'Echo & Jane',
			icon : 'assets/images/marker.png',
			infoWindow : {
				content : '<div style="text-align:center;"><h5>Our Wedding Party</h5> <p>Lorem ipsum dolor sit amet.</p></div>'
			}

		});

		// Addclass navbar-sticky-top on nav (Main Navigation)
		$(document).ready(function() {

			var initialTop = $("nav").offset().top;

			$(window).on("scroll", function() {

				var scrolltop = $(this).scrollTop();
				var top = initialTop - scrolltop;

				if (top < initialTop) {
					$("nav").addClass("navbar-fixed-top");
					$("body").css("padding-top", $('nav').height() + "px");
				} else {

					$("nav").removeClass("navbar-fixed-top");
					$("body").css("padding-top", 0 + "px");
				}

			});
		});

		/* HERO IMAGE SLIDER */
		$('#hero .slider').bxSlider({
			pager : false,
			controls : false,
			auto : true,
			mode : 'fade',
			speed : 700
		});
		
		
		// Start Youtube Hero Background
		
		if($(".yout-background").length)
		{
			$(".yout-background").YTPlayer();
		}
		

	}(jQuery));
