// variables 
const preloader = document.querySelector('#preloader');
const overflow = document.querySelector('body');
const letsGo = document.querySelector("#letsGo");
const nav = document.querySelector(".nav");

// loading bar animation logic

// on loading 100%, hide loading bar

// once window loads, activate letsGo function
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
    overflow.classList.remove("preloader--overflow");
}

// listen for the letsGo Button event
letsGo.addEventListener("click", preloaderFade);