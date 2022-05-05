function getJsonData(user) {

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


function populate(info,user) {
  info.forEach(element => {


    if(user == 0) {

      let checkValue = element.completed ? "checked" : "" ;
      let checkBox = `<input class="form-check-input" type="checkbox" ${checkValue}>`;
  

      var taskRow = `<tr> <th scope="row">${element.id}</th><td>${element.userId}</td><td>${element.title}</td><td>${checkBox}</td></tr>` ; 

    } else if(user == element.userId) {

      let checkValue = element.completed ? "checked" : "" ;
      let checkBox = `<input type="checkbox" ${checkValue}>`;

      var taskRow = `<tr> <th scope="row">${element.id}</th><td>${element.userId}</td><td>${element.title}</td><td>${checkBox}</td></tr>` ;

    } else {
      return;
    }

    todoBody.innerHTML += taskRow;

  });
}
