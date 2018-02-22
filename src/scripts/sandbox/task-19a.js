//TASK 19A
  export default function getCanvasData(context, height, width) {
    return context.getImageData(0, 0, width, height);
  }
