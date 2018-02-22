

function UserInterface(){
  let mouseButtonPressed = false;

  function getMouseButtonPressed(){
    return mouseButtonPressed;
  }
  function setMouseButtonPressed(isPressed){
    mouseButtonPressed = isPressed;
  }

  return{
    getMouseButtonPressed: getMouseButtonPressed,
    setMouseButtonPressed: setMouseButtonPressed
  }
}

export let userInterface = new UserInterface();
