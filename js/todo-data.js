function getJsonData(user) {  //user number is given on function call

  var todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = '';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data= this.responseText;
        jsonData = JSON.parse(data);
        populate(jsonData,user,todoBody);
        console.log(todoBody)
      }
  };
  xhttp.open("GET", "./resources/todos.json", true);
  xhttp.send();
}

// User count is compared to filter the row according to the chosen user(on load, 0 is sent as user)
function populate(info,user,position) {

  // position.innerHTML = '<thead><tr> <th scope="col"><h5> Sl. No.</h5></th><th scope="col"><h5>Task Title</h5></th><th scope="col"><h5>Status</h5></th></tr></thead><tbody' ;


  info.forEach(element => {
    
    if(user == 0) { 
      var taskRow = buildTableRow(element);   
    } else if(user == element.userId) {
      var taskRow = buildTableRow(element);  
    } else {  
      return;
    }
    console.log(taskRow);
    position.innerHTML += taskRow;
  });


}

function buildTableRow(ele) {

  let checkValue = ele.completed ? "checked" : "" ;
  let disableValue = ele.completed ? "disabled" : "" ;
  let checkBox = `<input onchange="fiveTasks(this);" ${disableValue} class="form-check-input" type="checkbox" ${checkValue}>`;

  return `<tr> <th scope="row">${ele.id}</th><td>${ele.title}</td><td>${checkBox}</td></tr>` ;  //<td>${ele.userId}</td>
}

var completionCount = 0;
var taskSuccessDisplay =  document.getElementById('taskSuccessDisplay');
async function fiveTasks(ele) {

  var fiveDone = new Promise(function(resolve) {
    //if element is checked, increment counter else decrement
    (ele.checked) ? completionCount++ : completionCount-- ; 
    // console.log(`${completionCount}`);
    if(completionCount == 5) {
      completionCount = 0;
      resolve("Congrats. 5 Tasks have been Successfully Completed")
    }
  });
  var res = await fiveDone;
  alertBox(res, 'success', taskSuccessDisplay); //alertbox is defined in script.js
  setTimeout(() => {
    closeAlertBox(taskSuccessDisplay);
  }, 5000);
}
