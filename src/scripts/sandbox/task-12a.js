  //TASK 12A
  export default function createCanvas(id, height, width) {
    var canvas = document.createElement("canvas");
    canvas.id = id;
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
    return canvas;
  }
