var signinform = document.getElementById("signin-form");

if(signinform) {
  signinform.addEventListener("submit", pageRedirect);
}

function pageRedirect(submitEvent) {
  submitEvent.preventDefault();
  location.replace("./todo-page.html");
  console.log(location)
}

function askToLogin() {

}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  if(alertPlaceholder.innerText == "") {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert"><i class="fa-solid fa-triangle-exclamation"></i> &nbsp;' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
  } else {
    console.log("dddddd")
    alertPlaceholder.removeChild(alertPlaceholder.lastChild)

  }

}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Sign In with your credentials to view the TO-DO list!', 'danger')
  })
}