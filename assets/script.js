$(document).ready(function(){

	NUM_IMAGES = 130;
	IMG_LOCATION = "assets/img/";
	IMG_SUFFIX = ".jpg";
	GIF_SUFFIX = ".GIF";

	var shown = [];
	var tries = 0;

	var gifs = [7, 73, 75, 106, 107];

	$("#refresh").click(function () {
		var randomNumber = Math.floor(Math.random() * NUM_IMAGES) + 1;
		while (tries < 10) {
			if (shown.length == 130) {
				shown = [];
				break;
			}
			if (shown.includes(randomNumber)) {
				tries += 1;
				randomNumber = Math.floor(Math.random() * NUM_IMAGES) + 1;
			} else {
				shown.push(randomNumber);
				tries = 0;
				break;
			}
		}
		if (gifs.includes(randomNumber)) {
			var imgName = IMG_LOCATION + randomNumber + GIF_SUFFIX;
		} else {
			var imgName = IMG_LOCATION + randomNumber + IMG_SUFFIX;
		}
		document.getElementById("imageid").src= imgName ;
	});
	
});