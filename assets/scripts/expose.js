// explore.js

window.addEventListener('DOMContentLoaded', init); 

function init() {
  console.log("hello world");
  let volume = 0.5;

  const selector = document.getElementById("horn-select");
  // TODO
  selector.addEventListener("input", function() {
    console.log(selector);
    console.log(selector.firstChild.value);
    // code to run when the event is triggered
    if(selector.value === "air-horn") {
      document.querySelector("img").src = "assets/images/air-horn.svg";
      document.querySelector("audio").src = "assets/audio/air-horn.mp3";
      console.log(document.querySelector("audio"));
    }
    else if(selector.value === "car-horn") {
      document.querySelector("img").src = "assets/images/car-horn.svg";
      document.querySelector("audio").src = "assets/audio/car-horn.mp3";
    }
    else { //it's the party horn
      document.querySelector("img").src = "assets/images/party-horn.svg";
      document.querySelector("audio").src = "assets/audio/party-horn.mp3";
    }
  });

  const audioSelector = document.getElementById("volume-controls");
  audioSelector.addEventListener("input", function() {
    const sliderValue = document.querySelector("input").value;
    console.log(sliderValue);
    const volumeIcon = document.querySelector("#volume-controls img")
    let state = 5;

    if(sliderValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      console.log("in the 0 section of if-else");
      volume = 0;
      state = 0;
    }
    else if(sliderValue > 0 && sliderValue < 34) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      state = 1;
    }
    else if(sliderValue > 33 && sliderValue < 68) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      state = 2;
    } 
    else { //show level 3 svg
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      state = 3;
    }
    volume = sliderValue / 100;
    console.log(state);
  });

  const buttonSelector = document.querySelector("button");
  buttonSelector.addEventListener("click", function() {
    const audio = document.querySelector("audio");
    audio.volume = volume;
    audio.src = "assets/audio/air-horn.mp3";
    audio.play();
  });  
}