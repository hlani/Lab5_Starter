// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //need this to get the speech synthesis
  var synth = window.speechSynthesis;
  
  //used to change the images
  var faceImage = document.querySelector('#explore img');
  var voiceSelect = document.getElementById('voice-select');
  var textToSpeak = document.getElementById('text-to-speak');
  var speakButton = document.querySelector('button');
  var voices = [];

  // populates the voice drop down
  function populateVoiceList() {
    voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }

  }

  // populates the voice list
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // when push to talk is active
  speakButton.addEventListener('click', function () {
      var utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      //image is open mouth from start of speech
      utterThis.onstart = function () {
          faceImage.src = 'assets/images/smiling-open.png';
      }

      //image is now smiling 
      utterThis.onend = function () {
          faceImage.src = 'assets/images/smiling.png'; 
      }

      synth.speak(utterThis);
  })
}