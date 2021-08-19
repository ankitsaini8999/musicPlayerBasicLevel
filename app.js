"use strict";

const play = document.querySelector("#Play");
const cover = document.querySelector(".cover");
const songName = document.querySelector(".songName");
const albumPic = document.querySelector(".albumPic");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const aud = document.querySelector(".aud");
const playBtn = document.querySelector("#playBtn");

const arrSongs = ["music/mp3-1.mp3", "music/mp3-2.mp3", "music/mp3-3.mp3"];
const arrAlbum = ["album/1.jpg", "album/2.jpg", "album/3.jpg"];
const arrSongName = ["Music 1", "Music 2", "Music 3"];

let songIndex = 0;
if (songIndex == 0) {
	play.src = `${arrSongs[songIndex]}`;
	songName.innerHTML = `${arrSongName[songIndex]}`;
	albumPic.style.background = `url(${arrAlbum[songIndex]}) center center/cover`;
}
next.addEventListener("click", function () {
	songIndex++;
	if (songIndex < arrSongs.length) {
		play.src = `${arrSongs[songIndex]}`;
		songName.innerHTML = `${arrSongName[songIndex]}`;
		albumPic.style.background = `url(${arrAlbum[songIndex]}) center center/cover`;
	} else if ((songIndex = arrSongs.length - 1)) {
		songIndex = 0;
		play.src = `${arrSongs[songIndex]}`;
		songName.innerHTML = `${arrSongName[songIndex]}`;
		albumPic.style.background = `url(${arrAlbum[songIndex]}) center center/cover`;
	}
});
aud.addEventListener("click", function () {
	if (!aud.classList.contains("playing")) {
		aud.classList.add("playing");
		play.play();
	} else {
		aud.classList.remove("playing");
		play.pause();
	}
});
prev.addEventListener("click", function () {
	songIndex--;
	if (songIndex < 0) {
		songIndex = arrSongs.length - 1;
		play.src = `${arrSongs[songIndex]}`;
		songName.innerHTML = `${arrSongName[songIndex]}`;
		albumPic.style.background = `url(${arrAlbum[songIndex]}) center center/cover`;
	} else if (songIndex < arrSongs.length) {
		play.src = `${arrSongs[songIndex]}`;
		songName.innerHTML = `${arrSongName[songIndex]}`;
		albumPic.style.background = `url(${arrAlbum[songIndex]}) center center/cover`;
	}
});

function toggling(x) {
	x.classList.toggle("fa-pause");
	x.classList.toggle("fa-play");
}
