//TASK 13B - Bee
  export default function updateGridFromCanvasData(array, imageData) {
    //get pixel data
    var pixels = imageData.data;
    //how many pixels in the canvas
    var numPixels = imageData.width * imageData.height;

    for (var i = 0; i < numPixels; i++) {
      //get rgba as string
      var color = pixels[i * 4] + "" + pixels[i * 4 + 1] + "" + pixels[i * 4 + 2]+ "" + pixels[i * 4 + 3];

      if (color === "000255") {
        //is black return 1
        array[i] = 1;
      } else  {
        //is not black return 0
        array[i] = 0;
      }
    }
    return array;
  }
