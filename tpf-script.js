// set init functions on page load
window.onload = function() {
	let imgs = document.getElementsByClassName("gallery_card_image");
  Array.from(imgs).forEach((el) => {
    // Do stuff here
    el.children[0].src = "https://freight.cargo.site/w/300/q/75/i/98dbb9064f4684fbc3feac6b8a5204d0f7396641a5b715e85d53ce3a8989e0db/folder.png";
});
};