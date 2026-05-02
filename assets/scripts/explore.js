// explore.js

window.addEventListener('DOMContentLoaded', init); 

function init() {
  console.log("hello world");

  const selector = document.getElementById("horn-select");
  // TODO
  select.addEventListener('change', function() {
    console.log(selector);
    console.log(selector.firstChild.value);
    // code to run when the event is triggered
    if(selector.firstChild.value === "air-horn") {
      document.querySelector("#explore img").src = "assets\images\air-horn.svg";
      document.querySelector("audio").src = "assets\audio\air-horn.mp3";
    }
    else if(selector.firstChild.value === "car-horn") {
      document.querySelector("#explore img").src = "assets\images\car-horn.svg";
      document.querySelector("audio").src = "assets\audio\car-horn.mp3";
    }
    else { //it's the party horn
      document.querySelector("#explore img").src = "assets\images\party-horn.svg";
      document.querySelector("audio").src = "assets\audio\party-horn.mp3";
    }
  });
}


