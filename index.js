


const play = document.getElementById("play");
let isplaying = false;
const img = document.querySelector("img");
const music = document.querySelector("audio");
const previous = document.getElementById("prev");
const nextt = document.getElementById("next");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
let list = document.getElementById("items");
let progress = document.getElementById("progress");
let progress_div=document.getElementById("progress_div");

let currenttime = document.getElementById("currenttime");

let durations = document.getElementById("duration");
const songs = [{
    name: "parwez1",
    title: "song1",
    artist: "parwezj",
    image: "img1",
  },
  {
    name: "parwez2",
    title: "song2",
    artist: "parwezuj",
    image: "img2",
  },
  {
    name: "parwez3",
    title: "song3",
    artist: "parwezh",
    image: "img3",
  },
  {
    name: "parwez4",
    title: "song4",
    artist: "parwez",
    image: "img1",
  },
];


let i = 0;
let play_function = () => {
  isplaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};



let str = "";
let k = 0;
let temp = 0;
let li = document.querySelector("li");
li.addEventListener("click", () => {
  str = li.title;
  console.log(str);
  for (let m = 0; m < songs.length; m++) {
    if (songs[i].title == str) {
      temp = i;
    }
  }
  loadsong(songs[temp]);
  play_function();

  str = "";
});





let pause_function = () => {
  isplaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};




play.addEventListener("click", () => {
  if (isplaying == false) {
    play_function();
  } else {
    pause_function();
  }
});




let loadsong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  img.src = "/image/" + songs.image + ".jpg";
  music.src = "/mus/" + songs.name + ".mp3";
};




let current_index = 0;
let song_index = 0;
let nextsong = () => {
  loadsong(songs[song_index]);
  console.log(song_index);
  current_index = song_index;




  play_function();
  song_index++;
  if (song_index == songs.length) {
    song_index = 0;
  }
};




const prevsong = () => {
  loadsong(songs[current_index]);
  console.log(current_index);
  current_index--;
  play_function();

  if (current_index < 0) {
    current_index = songs.length - 1;
  }
};

// progresss                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

music.addEventListener('timeupdate', (event)=>{


  const {
    currentTime,
    duration
  } = event.srcElement;


  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;
  let minute_duration = Math.floor(duration / 60);
  let second_duration = Math.floor(duration % 60);

  if (minute_duration < 10) {
    minute_duration = `0${minute_duration}`;
  }

  if (second_duration < 10) {
    second_duration = `0${second_duration}`;
  }

  let total_duration = `${minute_duration}:${second_duration}`;
  if (duration) {
    durations.textContent = total_duration;
  }
  let minutecurrentTime = Math.floor(currentTime / 60);
  let secondcurrentTime = Math.floor(currentTime % 60);

  if (secondcurrentTime < 10) {
    secondcurrentTime = `0${secondcurrentTime}`
  }



  let totalcurrentTime = `${minutecurrentTime}:${secondcurrentTime}`;

  currenttime.textContent = totalcurrentTime;



});
// if music end next song


progress_div.addEventListener("click", (event)=>{
const {duration}=music;
  let progress_move=(event.offsetX/event.srcElement.clientWidth)*duration;

  music.currentTime=progress_move;
});


// if clicked on progress bar

music.addEventListener("ended", nextsong);

nextt.addEventListener("click", nextsong);
previous.addEventListener("click", prevsong);





