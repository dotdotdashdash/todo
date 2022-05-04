var signinform = document.getElementById("signin-form");

if(signinform) {
  signinform.addEventListener("submit", pageRedirect);
}

function pageRedirect(submitEvent) {
  submitEvent.preventDefault();
  location.replace("./todo-page.html");
  console.log(location)
}