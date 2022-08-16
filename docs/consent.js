window.addEventListener("load", (event) => {
	let consent;
	if (localStorage.getItem('consent')) {
		consent = localStorage.getItem('consent');
	} else {
		const consentHTML = '<div class="overlay"></div><section class="consent"><strong>Auswahl &amp; Zustimmung von Drittanbietern und Cookies</strong><form><fieldset><input id="necessary" type="checkbox" value="necessary" name="necessary"><label for="necessary">Notwendig zur Funktion</label><br /><input id="all" type="checkbox" value="full" name="all"><label for="all">Alle erlauben</label></fieldset><button type="button">Bestätigen</button></form><p>Hallo, diese Seite benutzt Technologien von Drittanbietern, welche genau können Sie in der <a href="">Datenschutzerklärung</a> durchlesen. Sollten Sie dies nicht wollen, wählen Sie "Notwendig zur Funktion", somit werden nur Daten auf dem Server dieser Webseite gespeichert und alle Drittanbieter blockiert, was die Funktionen einschränkt.</p></section>';
		document.body.insertAdjacentHTML('afterend', consentHTML);

		const consentOverlay = document.getElementsByClassName("overlay")[0];
		const consentBox = document.getElementsByClassName("consent")[0];
		const consentBTN = consentBox.getElementsByTagName("button")[0];
		const consentInput = consentBox.getElementsByTagName("input");
		const consentLabels = consentBox.getElementsByTagName("label");

		for(let label in consentLabels.length) {
			consentLabels[label].addEventListener("click", ()=>{

			});
		}

		consentBTN.addEventListener("click", ()=>{
			if (consentInput[0].checked || consentInput[1].checked) {

				if (consentInput[1].checked) {
					localStorage.setItem('consentAgreement', 'all');
				} else {
					localStorage.setItem('consentAgreement', 'necessary');
				}
				localStorage.setItem('consent', 'accepted');
				consentOverlay.remove();
				consentBox.remove();
				return;
			}
			consentLabels[0].classList.add("error");
			consentLabels[1].classList.add("error");
		});






	}
});
