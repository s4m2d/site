"use strict";
class App {
  constructor () {
    this.imageLoader();
    this.searchbar();
    this.analytics();
  }
  imageLoader () {
    let imageLoader = {};
    imageLoader._images = document.getElementsByClassName('imgld');
    imageLoader.length = imageLoader._images.length;
    imageLoader._hdimages = [];
    var i = 0;
    //Fetch HD Images
    for ( i; i < imageLoader.length; i++ ) {
      let img = new Image();
      img.src = imageLoader._images[i].dataset.imghd;
      img.dataset.inx = i;
      img.onload = function(e){
        imageLoader._images[img.dataset.inx].src = img.src;
      };
    }
  }
  analytics () {

  }
}
window.onload = function () {
  new App();
}
