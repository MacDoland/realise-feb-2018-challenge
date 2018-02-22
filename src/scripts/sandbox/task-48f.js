//TASK 48F
export default function getState(value, positiveCount) {
    var state = 0;

    if (value === 1 && positiveCount < 2) {
      state = 0;
    }

    if (value === 1 && positiveCount == 2) {
      state = 1;
    }

    if (value === 1 && positiveCount == 3) {
      state = 1;
    }

    if (value === 1 && positiveCount > 3) {
      state = 0;
    }

    if (value === 0 && positiveCount === 3) {
      state = 1;
    }

    return state;
  }
