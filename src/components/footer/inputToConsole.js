const inputToConsole = (input, console) => {
  let newInput = input;
  if(console === 'xbox'){
    newInput = newInput.replace(/[1]/gi, 'X');
    newInput = newInput.replace(/[2]/g, 'Y');
    newInput = newInput.replace(/[3]/g, 'A');
    newInput = newInput.replace(/[4]/g, 'B');
    newInput = newInput.replace(/Change Stance/gi, 'LT');
    newInput = newInput.replace(/block/gi, 'RT');
    newInput = newInput.replace(/amplify/gi, 'RB');
  }
  if(console === 'ps4'){
    newInput = newInput.replace(/[1]/gi, '□');
    newInput = newInput.replace(/[2]/g, '△');
    newInput = newInput.replace(/[3]/g, '○');
    newInput = newInput.replace(/[4]/g, '✖');
    newInput = newInput.replace(/Change Stance/gi, 'L2');
    newInput = newInput.replace(/block/gi, 'R2');
    newInput = newInput.replace(/amplify/gi, 'R1');
  }
  newInput = newInput.replace(/back/gi, '←');
  newInput = newInput.replace(/up/gi, '↑');
  newInput = newInput.replace(/forward/gi, '→');
  newInput = newInput.replace(/down/gi, '↓');

  return newInput;
}

export default inputToConsole;