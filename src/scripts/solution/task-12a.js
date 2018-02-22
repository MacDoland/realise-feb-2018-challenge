  //TASK 12A Laurence/Emma
  export default function createCanvas(idName, heightNum, widthNum) {
    const canvas = document.createElement('canvas');
    canvas.id = idName;
    canvas.height = heightNum;
    canvas.width = widthNum;

    document.body.appendChild(canvas);
    return canvas;
  }
