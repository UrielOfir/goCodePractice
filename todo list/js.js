let button=document.querySelector("#registerbtn");
let formSubmitRequest= new XMLHttpRequest;

fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => console.log(data));

button.onclick=function(event){
event.preventDefault();
fetch('http://localhost:8000/')
  .then(response => response.json())
  .then(data => console.log(data));
}