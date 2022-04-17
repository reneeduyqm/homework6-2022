var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById ("player1");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + '%'
	console.log("The current volume is " + video.volume*100 + '%')
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New playback speed is " + video.playbackRate);
});



document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New playback speed is "+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	if (video.currentTime >= video.duration - 15){
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	else{
		video.currentTime += 15;
		console.log("New spot is "+ video.currentTime);
	}
	
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	if (video.muted == true) {
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute";
		console.log(video.muted)
	}
	else {
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
		console.log(video.muted)
	}

})

document.querySelector("#slider").addEventListener("click", function() {

	video.volume = this.value / 100
	document.getElementById("volume").innerHTML = video.volume*100 + '%'
	console.log(video.volume*100 + '%')
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
	console.log("Old School")
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	console.log("Original")
})