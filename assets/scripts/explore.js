// explore.js

window.addEventListener('DOMContentLoaded', init); 
const speechSynthesis = window.speechSynthesis;

const voiceSelect = document.getElementById("voice-select");
let voices = [];

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  voices = speechSynthesis.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("voice", voice.name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function init() {
  // when press button
  const playButton = document.querySelector("button");
  const smilingFace = document.querySelector("img");

  playButton.addEventListener("click", function() {
    const textArea = document.getElementById("text-to-speak");
    const voiceSelect = document.getElementById("voice-select");
    const textToSpeak = textArea.value;

    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("voice");

    for(const voice of voices){
      if (voice.name === selectedVoice){
        utterance.voice = voice;
        break;
      }
    }

    speechSynthesis.speak(utterance);

    const checkSpeaking = setInterval(() => {
      if (speechSynthesis.speaking) {
        smilingFace.src = "assets/images/smiling-open.png";
      } else {
        smilingFace.src = "assets/images/smiling.png";
        clearInterval(checkSpeaking);
      }
    }, 100);
  });
}
