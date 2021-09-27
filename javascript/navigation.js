//DOM variables
const slider = document.querySelector('#location-circle');
const navlink = document.getElementsByClassName('navbar__link');

//pathway/screen variables

// changes opacity of selected nav__link
// const navSelection = (selection) => {
  // iterate through each link
  //   for each link 
  //     reduce opacity to 40%
  //     and circle size
    // if link = event trigger (selection) 
      // become 100% opaque
      // and increase circle size
      // and activate pulse animation
// } 

//CAN CHANGE SIZE BY COMPARING TO OTHER BUTTONS USING || ?!?!?! 

//call the function in the preloader javascript and the nav links
const navCircleBehaviour = () => {
  const homeC = document.querySelector('#homeCircle');
  const aboutC = document.querySelector('#aboutCircle');
  const circle = document.querySelectorAll('.circle');
  //get link address
  const pathname = window.location.hash; 
  let path = document.getElementById(`${pathname.slice(1)}Circle`);
  console.log(path);
  //create object with rendered styles and extract width value
  const idCircleWidth = Number(window.getComputedStyle(path).width.replace("px", ""));
  const homeCircleWidth = Number(window.getComputedStyle(homeC).width.replace("px", ""))
  const aboutCircleWidth = Number(window.getComputedStyle(aboutC).width.replace("px", ""))
  //bug tests
  console.log(idCircleWidth);

  //check click isn't repeating address by comparing circle sizes
  if (idCircleWidth > homeCircleWidth || 
    idCircleWidth > aboutCircleWidth) {
      console.log('I returned false');
      return;
  } 
  //otherwise, resize circles
  // const position = window.getComputedStyle(path).bottom.replace("px", "");
  // console.log(position);
  const small = idCircleWidth;
  //resize other circles
  circle.forEach(cir => cir.style.width = `${small}px`);
  circle.forEach(cir => cir.style.height = `${small}px`);
  // circle.forEach(cir => cir.style.bottom = `${position}px`);
  //enlargen current circle
  path.style.width = `${small + (small/100)*40}px`;
  path.style.height = `${small + (small/100)*40}px`;
  path.style.bottom = `${(position/100)*105}px`;
  // console.log(path.style.bottom = `${(position/100)*87}px`);
  return;
}

//resizes 
const adjustStyles = () => {
  //call navCircle Behaviour
  navCircleBehaviour();
  // navSelection();
  return;
}

//Event listeners
// Window resize calls style adjustments 
window.addEventListener("resize", adjustStyles); //logical issue - media query conflict?
window.addEventListener("hashchange", adjustStyles);
