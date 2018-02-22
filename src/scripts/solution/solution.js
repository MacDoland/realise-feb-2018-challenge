import {userInterface} from './task-33b.js';
import {configuration} from './task-81d.js';
import Artist from './task-42a.js';
import createCanvas from './task-12a.js';
import getMousePos from './task-32b.js';

(function() {
  var canvas = createCanvas("screen", configuration.canvasHeight, configuration.canvasWidth);
  var artist = new Artist(canvas);

  configuration.startButton.addEventListener("click", artist.start);
  configuration.stopButton.addEventListener("click",  artist.stop);

  canvas.addEventListener('mousedown', function(event) {
    userInterface.setMouseButtonPressed(true);
  });

  document.body.addEventListener('mouseup', function(event) {
    userInterface.setMouseButtonPressed(false);
  });

  canvas.addEventListener('mousemove', function(event) {
    if (userInterface.getMouseButtonPressed() && !artist.getIsActive()) {

      var isRightMB;
      event = event || window.event;

      if ("which" in event){
        isRightMB = event.which == 3;
      }
      else if ("button" in event){
        isRightMB = event.button == 2;
      }

      var mousePos = getMousePos(canvas, event);
      artist.drawPoint(mousePos.x, mousePos.y, isRightMB ? 0 : 1)
    }
  });

  configuration.slider.oninput = function(){
    artist.setDelay(configuration.maxSlideValue - this.value);
  }


  //  var slider = document.getElementById("delay");
  //delay = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  //  slider.oninput = function() {
  //    console.log(delay)
  //    delay = this.value;
  //  }

})();
