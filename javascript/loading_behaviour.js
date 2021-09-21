// variables 
const overflow = document.querySelector('body');
const preloader = document.querySelector('#preloader');
const letsGo = document.querySelector("#letsGo");
const letsGoLabel = document.querySelector(".letsGo__label");
const loadingBar = document.querySelector(".loading-bar");
const loadingSlider = document.querySelector(".loading-bar__progress");
const nav = document.querySelector(".nav");

// Variable not yet called
const loadingSliderWidth = loadingSlider.style.width;

// when loadingSliderWidth === 100%, call pageLoaded()

//(CURRENTLY NOT LINKED TO PAGE PROGRESS)
const pageLoaded = () => {
  // animate vanishing loading bar
  loadingBar.classList.add("loading-bar--animated");
  // animate appearing button/gif
  letsGo.classList.add("letsGo--appear");
  letsGo.classList.add("letsGo__pulse--appear");
  // animate text fade in
  letsGoLabel.classList.add("letsGo__label--appear");
}

// letsGoButton, onclick 
const preloaderFade = () => {
  console.log("I'm being clicked");
  // black fades out
  preloader.classList.add("preloader--disappear");
  // activate navbar animation 
  nav.classList.add("nav--animated");
  // delete preloader--overflow class from body
  overflow.classList.remove("preloader--overflow");
}

// once window loads, activate letsGo function
// document.addEventListener("load", pageLoaded);

// listen for the letsGo Button event
letsGo.addEventListener("click", preloaderFade);