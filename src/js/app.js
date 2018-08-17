/*class App {
	constructor() {
		this.nodes = [];
		this.nodes.menuIcon = document.getElementsByClassName('menu-icon')[0];
		this.nodes.menuOffcanvas = document.getElementsByClassName('menu-offcanvas')[0];
		this.nodes.container = document.getElementsByClassName('container')[0];
		this.nodes.navContainer = document.getElementsByClassName('nav-container')[0];
		this.nodes.cta = document.getElementsByClassName('cta')[0];
		const ctaOffset = this.nodes.cta.offsetTop + this.nodes.cta.offsetHeight + this.nodes.navContainer.offsetHeight / 2;
		this.welcomeMessage();
		this.initOffcanvas();
		this.calcNavHeight(ctaOffset);
		document.body.classList.add('ready');
	}

	welcomeMessage() {
		console.log('welcome')
	}

	initOffcanvas() {
		this.nodes.menuIcon.addEventListener('click', ()=> {
			this.toggleOffcanvas();
		});

		document.addEventListener('keydown', (e)=>{
			if(e.key === 'Escape') {
				this.toggleOffcanvas();
			}
		});
	}

	toggleOffcanvas() {
		this.nodes.menuIcon.classList.toggle('active');
		this.nodes.menuOffcanvas.classList.toggle('active');
		this.nodes.container.classList.toggle('disabled');
		this.nodes.navContainer.classList.toggle('active');
		document.body.classList.toggle('noscroll');
	}

	calcNavHeight(ctaOffset) {
		window.onscroll = () => {
			const offset = window.pageYOffset;
			if(offset > 30) {
				this.nodes.navContainer.classList.add('scroll');
			} else {
				this.nodes.navContainer.classList.remove('scroll');
			}

			if(offset > ctaOffset) {
				this.nodes.cta.classList.add('scroll');
			} else {
				this.nodes.cta.classList.remove('scroll');
			}
		};
	}
}
window.onload = function() {
	new App();
}*/