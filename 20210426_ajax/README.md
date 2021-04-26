# AJAX
Assynchronius
JavaScript
And
XML (eXtend Markup Language)

JSON (JavaScript Object Notation)

XML Http Request - Запрос XML через HTTP

```js
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

```


