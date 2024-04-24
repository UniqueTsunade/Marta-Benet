const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,

	breakpoints: {
		
		700: {
		  slidesPerView: 2,
		  spaceBetween: 20
		},
		
		1000: {
		  slidesPerView: 3,
		  spaceBetween: 40
		}
	},

	on: {
		init: function () {
		  // Adding classes to slides during initialization
		  this.slides.forEach(function (slide, index) {
			if (index === 1) {
			  slide.classList.add('special-slide');
			}
		  });
		},
		slideChange: function () {
		  // Adding classes to slides when the slide changes
		  this.slides.forEach(function (slide) {
			slide.classList.remove('special-slide');
		  });
		  this.slides[this.activeIndex + 1].classList.add('special-slide');
		},
	  },
  
	// Navigation arrows
	navigation: {
	  nextEl: '#sliderNext',
	  prevEl: '#sliderPrev',
	},
  
  });

  export default swiper;