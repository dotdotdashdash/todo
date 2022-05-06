var signInForm = document.getElementById('signInForm');

if(signInForm) {
  signInForm.addEventListener("submit", signIn);
}

function signIn(event) {
  var uName = document.getElementById('uName').value;
  var pwd = document.getElementById('pwd').value;
  var signInButton = document.getElementById('signInButton')

  if(uName == "admin" && pwd == 12345) {
    event.preventDefault();
    location.replace("./todo-page.html");
  } else {
    // alert("Invalid Credentials");
    signInButton.setCustomValidity('Invalid Credentials'); 
    signInButton.reportValidity(); 
    event.preventDefault();
  }
}


//Not very important; included to show the lil alert box at the top of homepage that show up when TO-DO button is clicked
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var alertTrigger = document.getElementById('liveAlertBtn');

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alertBox('Sign In with your credentials to view the TO-DO list!', 'danger', alertPlaceholder,closeAlertBox);
  })
}

function alertBox(message, type, position,callToClose) {
  if(position.innerText == "") {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert"><i class="fa-solid fa-triangle-exclamation"></i> &nbsp;' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    position.append(wrapper);
  } else {
    try {
      callToClose(position);
    } catch (e) { }
  }
}

function closeAlertBox(position) {
  position.removeChild(position.lastChild);
}
