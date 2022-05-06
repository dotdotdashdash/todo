var signInForm = document.getElementById('signInForm');

if(signInForm) {
  signInForm.addEventListener("submit", signIn);
}

function signIn(event) {
  var uName = document.getElementById('uName').value;
  var pwd = document.getElementById('pwd').value;

  if(uName == "admin" && pwd == 12345) {
    event.preventDefault();
    location.replace("./todo-page.html");
  } else {
    alert("Invalid Credentials");
    event.preventDefault();
  }
}


var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var alertTrigger = document.getElementById('liveAlertBtn');

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alertBox('Sign In with your credentials to view the TO-DO list!', 'danger')
  })
}

function alertBox(message, type) {
  if(alertPlaceholder.innerText == "") {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert"><i class="fa-solid fa-triangle-exclamation"></i> &nbsp;' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  
    alertPlaceholder.append(wrapper)
  } else {
    alertPlaceholder.removeChild(alertPlaceholder.lastChild)

  }
}


