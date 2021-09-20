// changes opacity of selected nav__link
// const navSelection = (selection) => {
  // iterate through each link
    // for each link 
      // reduce opacity to 40%
      // and circle size
    // if link = event trigger (selection) 
      // become 100% opaque
      // and increase circle size
      // and activate pulse animation
// } 

// footer date 
const footerDate = () => {
  const year = new Date().getFullYear();
  document.getElementById("footer").innerHTML = `<p> © Emily Graham | ${year}</p>`;
}

// calling functions
footerDate();