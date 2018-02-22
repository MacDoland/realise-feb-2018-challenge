function Configuration(){
  return{
    canvasWidth : 1024,
    canvasHeight : 1024,
    canvasScale: 2,
    delay : 100,
    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop'),
    slider: document.getElementById("delay"),
    maxSlideValue: 500
  }
}

export let configuration = new Configuration();
