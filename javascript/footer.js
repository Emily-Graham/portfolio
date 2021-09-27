// footer date 
const footerDate = () => {
  const year = new Date().getFullYear();
  document.getElementById("footer").innerHTML = `<p> © Emily Graham | ${year}</p>`;
}

// calling functions
footerDate();