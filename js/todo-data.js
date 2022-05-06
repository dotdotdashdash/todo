function getJsonData(user) {  //user number is given on function call

  var todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = '';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data= this.responseText;
        jsonData = JSON.parse(data);
        populate(jsonData,user);
      }
  };
  xhttp.open("GET", "./resources/todos.json", true);
  xhttp.send();
}

// User count is compared to filter the row according to the chosen user(on load, 0 is sent as user)
function populate(info,user) {

  info.forEach(element => {
    
    if(user == 0) { 
      var taskRow = buildTableRow(element);   
    } else if(user == element.userId) {
      var taskRow = buildTableRow(element);  
    } else {  
      return;
    }
    todoBody.innerHTML += taskRow;
  });
}

function buildTableRow(ele) {

  let checkValue = ele.completed ? "checked" : "" ;
  let disableValue = ele.completed ? "disabled" : "" ;
  let checkBox = `<input onchange="fiveTasks(this);" ${disableValue} class="form-check-input" type="checkbox" ${checkValue}>`;

  return `<tr> <th scope="row">${ele.id}</th><td>${ele.title}</td><td>${checkBox}</td></tr>` ;  //<td>${ele.userId}</td>
}

var completionCount = 0;
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
  alert(res);
}