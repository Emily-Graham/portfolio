// variables 
const preloader = document.querySelector('#preloader');
const overflow = document.getElementsByTagName('body');
const letsGo = document.querySelector("#letsGo");

// once window loads, activate goButton function
// document.addEventListener("load", letsGo());

// const letsGo = () => {
//   // make button appear
// }

// letsGoButton, onclick 
const preloaderFade = () => {
  console.log("I'm being clicked");
  // black fades out
  preloader.classList.add("preloader--disapper");
  // loading bar deletes
  // activate navbar animation 
  // delete preloader--overflow class from body
    // overflow.className.remove("preloader--overflow")
}

// listen for the letsGo Button event
letsGo.addEventListener("click", preloaderFade);