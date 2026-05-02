// import JSConfetti from './js-confetti.browser.js'

window.addEventListener('DOMContentLoaded', init); 

function init() {
  let volume = 0.5;

  const selector = document.getElementById("horn-select");
  selector.addEventListener("input", function() {
    // code to run when the event is triggered
    const image = document.querySelector("img");
    const audio = document.querySelector("audio");

    if(selector.value === "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if(selector.value === "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else { //it's the party horn
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  const audioSelector = document.getElementById("volume-controls");
  audioSelector.addEventListener("input", function() {
    const sliderValue = document.querySelector("input").value;
    const volumeIcon = document.querySelector("#volume-controls img");

    let state = 5;

    if(sliderValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      state = 0;
    } else if(sliderValue > 0 && sliderValue < 34) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      state = 1;
    } else if(sliderValue > 33 && sliderValue < 68) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      state = 2;
    } else { //show level 3 svg
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

    if (selector.value === "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    
    audio.play();
  });  
}