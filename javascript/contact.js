// 'clear' button activation
function clearForm() {
  document.querySelector("#contactForm").reset();
}

// 'clear messages' button activation, clear session storage

// submit message function
function submitMessage(event) {
  event.preventDefault();
  
  // clear form
  event.target.reset();
}