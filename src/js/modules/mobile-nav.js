export function mobileNav() {
	try {
	// Elements 
	const mobileNavOpen = document.querySelector("#open-mobile-nav")
	const mobileNav = document.querySelector(".mobile-nav");
	const mobileNavClose = document.querySelector(".mobile-nav__close");

	// Check if elements exist before adding event listeners
	if (mobileNavOpen  && mobileNav && mobileNavClose) {
		// Make the menu visible
		mobileNavOpen.addEventListener("click", function() {
			mobileNav.classList.add("mobile-nav--open");
		});

		// Make the menu invisible 
		mobileNavClose.addEventListener("click", function() {
			mobileNav.classList.remove("mobile-nav--open");
		});
	} else {
		console.error("One or more required elements not found");
	}
	} catch (error) {
	console.error("An error occurred:", error);
}
}
