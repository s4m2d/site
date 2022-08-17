window.addEventListener("load", (event) => {
	const GALLERIES = document.getElementsByTagName("figure");
	for (let gallery = 0; gallery < GALLERIES.length; gallery++) {
		const images = GALLERIES[gallery].getElementsByTagName("img");
		const firstImage = images[0];
		const firstImageSrc = firstImage.src;
		for(let img = 0; img < images.length; img++) {
			images[img].addEventListener("mouseover", () => {
				firstImage.src = images[img].src;
			});
			images[img].addEventListener("onmouseleave", () => {
				firstImage.src = firstImageSrc;
			});
		}
	}
});
