$(document).ready(function(){

	NUM_IMAGES = 103;
	IMG_LOCATION = "assets/img/";
	IMG_SUFFIX = ".jpg";
	GIF_SUFFIX = ".GIF";

	$("#refresh").click(function () {
		var randomNumber = Math.floor(Math.random() * NUM_IMAGES) + 1;
		if (randomNumber == 7 || randomNumber == 73 || randomNumber == 75) {
			var imgName = IMG_LOCATION + randomNumber + GIF_SUFFIX;
		} else {
			var imgName = IMG_LOCATION + randomNumber + IMG_SUFFIX;
		}
		document.getElementById("imageid").src= imgName ;
	});

});