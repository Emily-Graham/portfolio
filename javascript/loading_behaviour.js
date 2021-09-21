// variables 
const preloader = document.querySelector('#preloader');
const overflow = document.getElementsByTagName('body');
const letsGo = document.querySelector("#letsGo");
const nav = document.querySelector(".nav");

// once window loads, activate goButton function
// document.addEventListener("load", letsGo());

// const letsGo = () => {
//   // make button appear
// }

// letsGoButton, onclick 
const preloaderFade = () => {
  console.log("I'm being clicked");
  // black fades out
  preloader.classList.add("preloader--disappear");
  // loading bar deletes
  // activate navbar animation 
  nav.classList.add("nav--animated");
  // delete preloader--overflow class from body
    // overflow.classList.remove("preloader--overflow")
}

// listen for the letsGo Button event
letsGo.addEventListener("click", preloaderFade);