let slideIndex = [];
let decks = document.getElementsByClassName("slideshow-container")
let deckDots = document.getElementsByClassName("deckDots")

loadSlides(decks);

function plusSlides(deckNum, deckimg) {
	slideIndex[deckNum - 1] += deckimg;
	updateSlides(deckNum, deckimg);
}

function currentSlide(deckNum, deckimg) {
	slideIndex[deckNum - 1] = deckimg;
	updateSlides(deckNum, deckimg);
}

function loadSlides(decks) {
	for (let deck = 0; deck < decks.length; deck++) {
		decks[deck].querySelector(".slide").style.display = "block";
		deckDots[deck].querySelector(".dot").className += " active";
		slideIndex.push(1);
	}
}

function updateSlides(deckNum, deckimg) {
	let i;
	let slides = decks[deckNum - 1].querySelectorAll(".slide");
	let dots = deckDots[deckNum - 1].children;

	//set slide deck to the first image if we have reached the end
	if (slideIndex[deckNum - 1] > slides.length) { slideIndex[deckNum - 1] = 1 }

	//set slide deck to last image if we go backwards past the first image
	if (slideIndex[deckNum - 1] < 1) { slideIndex[deckNum - 1] = slides.length }

	//hide all images in slide deck
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	//set corresponding image dot to active when image changes
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}


	slides[slideIndex[deckNum - 1] - 1].style.display = "block";
	dots[slideIndex[deckNum - 1] - 1].className += " active";
}