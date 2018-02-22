//TASK 2E - Bee
  export default function countInArray(array, value) {
    var count = 0;

   /* ES5 version
   for (var i = 0; i < array.length; i++) {
      if (array[i] == value) {
        count++;
      }
    }*/

    //es6 version
    count = array.filter( item => item == value ).length;

    return count;
  }

  //console.log(countInArray([1,1,2,2,1], 1));
