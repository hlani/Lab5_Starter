// expose.js

window.addEventListener('DOMContentLoaded', init);


//initialize confetti outside of init
var confetti = new JSConfetti(); 
 
function init() {

  //gets the hornselect dropdown, volumeslider, and playbutton  
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');

  //grabs the horn expose image control, volume control, and audio
  const hornImage = document.querySelector('#expose img');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');

  //dropdown for hornselect
  hornSelect.addEventListener('change', function() {
      switch (hornSelect.value) {
          case 'air-horn':
              hornImage.src = 'assets/images/air-horn.svg';
              audioElement.src = 'assets/audio/air-horn.mp3';
              break;
          case 'car-horn':
              hornImage.src = 'assets/images/car-horn.svg';
              audioElement.src = 'assets/audio/car-horn.mp3';
              break;
          case 'party-horn':
              hornImage.src = 'assets/images/party-horn.svg';
              audioElement.src = 'assets/audio/party-horn.mp3';
              break;
          //no image default
          default:
              hornImage.src = 'assets/images/no-image.svg'; 
      }
  });

  volumeSlider.addEventListener('input', function() {
    //corresponding volume set for the audio element
    audioElement.volume = volumeSlider.value / 100;
      if (volumeSlider.value == 0) {
          volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } else if (volumeSlider.value < 33) {
          volumeIcon.src = 'assets/icons/volume-level-1.svg';
      } else if (volumeSlider.value < 67) {
          volumeIcon.src = 'assets/icons/volume-level-2.svg';
      } else {
          volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
  });

  // when play button is clicked
  playButton.addEventListener('click', function() {
        //plays audio element
        audioElement.play();
        //if party horn is selected
        if (hornSelect.value === 'party-horn') {
            //confetti 
            confetti.addConfetti();
        }
      
  });


}


