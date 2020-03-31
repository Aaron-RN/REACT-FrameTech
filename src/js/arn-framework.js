// import './navMenu';


function InitializeFramework( state = 0) {
  let allElements = document.querySelectorAll('*');
  // const bgSize = document.querySelector('.bg-responsive-size');
  // const debugButton = document.querySelector('.debug-toggle');
  
  const allColClasses = [];

  // Populates allColClasses array with all possible combinations of the col-*-m*-* class
  function PopulateColClasses() {
    let str = '';
    const substr1 = 'col-';
    let substr2 = 1;
    const substr3 = '-m';
    let substr4 = 1;
    const substr5 = '-';
    let substr6 = 1;
    for (let i = 1; i <= 12; i += 1) {
      for (let o = 1; o <= 12; o += 1) {
        substr4 = o;
        str = substr1 + substr2.toString() + substr3 + substr4.toString()
          + substr5 + substr6.toString();
        if (!allColClasses.includes(str)) allColClasses.push(str);
        for (let u = 1; u <= 12; u += 1) {
          substr6 = u;
          str = substr1 + substr2.toString() + substr3 + substr4.toString()
            + substr5 + substr6.toString();
          if (!allColClasses.includes(str)) allColClasses.push(str);
        }
      }
      substr2 = i;
      str = substr1 + substr2.toString() + substr3 + substr4.toString()
        + substr5 + substr6.toString();
      if (!allColClasses.includes(str)) allColClasses.push(str);
    }
  }

  // Grabs all elements that contain the col-*-m*-* class
  // and adds the value to the element's data-col attribute
  function ColCreation() {
    allElements = document.querySelectorAll('*');
    for (let i = 0; i < allElements.length; i += 1) {
      const colStart = allElements[i].className.indexOf('col-');
      let colEnd = allElements[i].className.indexOf(' ', colStart);
      if (colEnd === -1) { colEnd = allElements[i].className.length; }
      const str = allElements[i].className.slice(colStart, colEnd);
      if (allColClasses.includes(str)) {
        allElements[i].setAttribute('data-col', str);
      }
    }
  }
  // function DebugToggle() {
  //   bgSize.classList.toggle('hide');
  //   for (let i = 0; i < allElements.length; i += 1) {
  //     allElements[i].classList.toggle('debug');
  //   }
  // }

  if(state === 0){
      // debugButton.addEventListener('click', () => { DebugToggle(); });
      PopulateColClasses();
      ColCreation();
  }
  if(state === 1){ PopulateColClasses();ColCreation();}
}


function resetAnim(elem, anim) {
  elem.classList.remove(anim);
  /* eslint-disable no-void */
  void elem.offsetWidth;
  /* eslint-enable no-void */
  elem.classList.add(anim);
}

export { InitializeFramework, resetAnim };