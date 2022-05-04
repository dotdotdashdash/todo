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
  console.log(user)
  info.forEach(element => {

    if(user == 0) {
      var taskRow = `<tr> <th scope="row">${element.id}</th><td>${element.userId}</td><td>${element.title}</td><td>${element.completed}</td></tr>` ; 
      console.log(taskRow);

    } else if(user == element.userId) {
      console.log(element.userId, element.id);
      var taskRow = `<tr> <th scope="row">${element.id}</th><td>${element.userId}</td><td>${element.title}</td><td>${element.completed}</td></tr>` ;
    } else {
      return;
    }

    todoBody.innerHTML += taskRow;

  });
}
