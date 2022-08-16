window.addEventListener("load", (event) => {
	const IMAGE = document.getElementsByClassName('image')[0];
	let imageScrollDistance = 0;
	let profileHeight = Math.round(document.getElementsByClassName('profile')[0].getBoundingClientRect().bottom + window.pageYOffset);
	let introDistance = Math.round(document.getElementsByClassName('introduction')[0].getElementsByTagName("p")[0].getBoundingClientRect().top + window.pageYOffset);


	calculateScroll = () => {
		imageScrollDistance = Math.round(IMAGE.getBoundingClientRect().top + window.pageYOffset) + 100;

		if (imageScrollDistance + 200 > profileHeight) {
			IMAGE.classList.add("small")
		} else {
			IMAGE.classList.remove("small")
		}

		if (imageScrollDistance > introDistance) {
			IMAGE.classList.add("left")
		} else {
			IMAGE.classList.remove("left")
		}
	}


	window.onresize = () => {
		profileHeight = Math.round(document.getElementsByClassName('profile')[0].getBoundingClientRect().bottom + window.pageYOffset);
		introDistance = Math.round(document.getElementsByClassName('introduction')[0].getElementsByTagName("p")[0].getBoundingClientRect().top + window.pageYOffset);
		calculateScroll();
	}

	window.onscroll = () => {
		calculateScroll();
	}
});
