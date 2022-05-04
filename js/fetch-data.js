var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data= this.responseText;
      console.log(data);
    }
};
xhttp.open("GET", "./resources/todos.json", true);
xhttp.send();