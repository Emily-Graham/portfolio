// variables 
const preloader = document.getElementsByClassName('preloader');
const overflow = document.getElementsByTagName('body');

// once window loads, activate goButton function
document.addEventListener("load", goButton());

// prevent overflow of content behind preloader
// 

const goButton = () => {
  // make button appear
}

// goButton, onclick 
const preloaderFade = () => {
  // black fades out
    preloader.classList.add("preloader--disapper");
  // activate navbar animation 
  // delete preloader--overflow class from body
    overflow.classList.remove("preloader--overflow")
}
