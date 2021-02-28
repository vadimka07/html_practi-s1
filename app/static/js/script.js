document.addEventListener("DOMContentLoaded", function () {
	new Swiper(".slider_reviews", {
		spaceBetween: 10,
		slidesPerView: 1,
		 pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			992: {
				slidesPerView: 1,
				spaceBetween: 15,
			}
		}

	});

	// const scrollToAnchor 	= document.querySelectorAll('a[href^="#"]');
	// scrollToAnchor.forEach(function(element) {
	// 	element.addEventListener("click", function (e) {
	// 		e.preventDefault();
	// 		const attributeLink = document.querySelector(this.getAttribute('href'));
	// 			attributeLink.scrollIntoView({
	// 				block: "start",
	// 				behavior: "smooth"
	// 			});
	// 	})

	// });


})