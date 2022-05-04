var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data= this.responseText;
      jsonData = JSON.parse(data);
      populate(jsonData);
    }
};
xhttp.open("GET", "./resources/todos.json", true);
xhttp.send();

function populate(info) {
  var todoBody = document.getElementById("todoBody");
  
  info.forEach(element => {

    let status = element.completed ? "Done" : "Not Done"

    let oneTaskRow = `<tr> <th scope="row">${element.id}</th><td>${element.
      userId}</td><td>${element.title}</td><td>${status}</td></tr>`
    todoBody.innerHTML += oneTaskRow;

  });
}