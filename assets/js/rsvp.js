(function($) {
		"use strict";
		
	/* AJAX RSVP FORM */

		$(document).ready(function() {
			// reset rsvp form
			reset_rsvp_form();
		});
		
		$("#rsvpform").on("submit", function(e) {
			e.preventDefault();

			// collect data befor submiting
			var $postData = {
				fullname : $("#rsvpName").val().trim(),
				email : $("#rsvpEmail").val().trim(),
				guests : $("#guests").val().trim(),
				notes : $("#notes").val().trim()
			}

			// disabled on submit
			$("#rsvpform button").attr("disabled", true);
			$("#rsvpform button #loader").show();
			if (validate($postData)) {

				$.post("mailrsvp.php", $postData, function(ret) {

					setTimeout(function() {

						if (ret.success) {
							$("#rsvp .modal-body").fadeIn(100).html("<h4 class='text-center'>" + ret.success + "</h4>");

						}

					}, 1000);
				}, 'json').done(function(ret) {

					if (ret.success) {
						// reload the page to reset the form
						$("#rsvp button.close").on("click", function() {
							location.reload();
						});
					}

				});
			} else {

				$("#rsvpform button").attr("disabled", false);

			}

		});

		function reset_rsvp_form() {

			$("#rsvp input, #rsvp textarea").val("");
			$("#rsvp select").val(0);
			$("#rsvpform input, #rsvpform textarea, #rsvpform select, #rsvpform button").attr("disabled", false);

		}

		function validate(data) {

			if (data.fullname == '') {
				alert("Fullname Can't be empty");
				return false;
			} else if (data.email == '') {
				alert("Email Can't be empty");
				return false;
			} else {

				return true;
			}

		}



}(jQuery));