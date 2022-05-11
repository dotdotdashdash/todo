function getData(statusValue, userValue) {

  statusValue = (statusValue == "null") ? null : (statusValue === "true")


  getJsonData(statusValue,userValue) 

}

function getJsonData(statusValue,userValue) {  //user number is given on function call

  var todoBody = document.getElementById("todoBody");
  var toHide = document.getElementById("toHide");
  var table = document.getElementById("table");
  todoBody.innerHTML = '';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {        
        table.style.visibility = "visible";
        toHide.style.visibility = "hidden";
        var data= this.responseText;
        jsonData = JSON.parse(data);

        populate(jsonData,statusValue,userValue,todoBody);
        // console.log(todoBody)
      }
  };
  xhttp.open("GET", "./resources/todos.json", true);
  xhttp.send();
}

// User count is compared to filter the row according to the chosen user(on load, 0 is sent as user)
function populate(info,statusValue,userValue,position) {

  
  // console.log("populate:",statusValue,userValue, typeof statusValue, typeof userValue);

  info.forEach(element => {

    // console.log("forEach:", element.completed == statusValue, element.completed , statusValue );
    
    if(statusValue == null && userValue == 0) { 
      // console.log("ifloop:",element.completed, element.userId);
      var taskRow = buildTableRow(element);   

    } else if(element.completed == statusValue &&  (element.userId == userValue || userValue == 0) ){
      // console.log("elseif:",element.completed,element.userId);
      var taskRow = buildTableRow(element);  
    } else {  
      // console.log("else:",element.completed,element.userId);
      return;
    }
    // console.log(taskRow);
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
