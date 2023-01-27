//JavaScript

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.querySelectorAll(".slide");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

var prev = document.querySelectorAll(".prev")[0];
var next = document.querySelectorAll(".next")[0];
prev.addEventListener("click", function () {
	plusSlides(-1);
});
next.addEventListener("click", function () {
	plusSlides(1);
});

//find all images in products and add container query to them to make them responsive to the container size and not the screen size (which is the default)
var images = document.querySelectorAll(".product img");
images.forEach((image) => {
	image.setAttribute("loading", "lazy");
	image.setAttribute("decoding", "async");
	image.setAttribute("data-container-query", "true");
	image.setAttribute("data-container-query-breakpoint", "100%");
});
