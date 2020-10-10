//1.
let li=document.getElementById(`list`);
let liItems={};
for (let i=0; i<30;i++){
  liItems[i]=document.createElement('li');
  let color= getRandomColor();
  liItems[i].innerHTML= `my color is ${color}`;
  liItems[i].style.color= `${getRandomColor()}`;
  liItems[i].style.backgroundColor=`${getRandomColor()}`;
  li.appendChild(liItems[i]);
}



//2.
let button=document.createElement(`button`);
let img=document.createElement('img');
img.src=`img1.png`;
img.width=`100`;
img.style.display="none";

button.innerHTML=`Click me to hide or view an image`;
document.body.insertBefore(img, document.querySelector("#clickCounter"));
document.body.insertBefore(button, document.querySelector("img") );

button.onclick=function(){
    if (img.style.display!=`none`)    img.style.display=`none`;
    else img.style.display=``
};

//7. 
let clickCounterP= document.getElementById("clickCounter");
let clickCounter=0;
document.onclick=function(){
  clickCounter++;
  clickCounterP.innerHTML=`The page was clicked ${clickCounter} times`;
}

//8. coordinates
window.onmouseover= function showCoords(event){
let x = event.clientX;     // Get the horizontal coordinate
let y = event.clientY;     // Get the vertical coordinate
let coor = "X coords: " + x + ", Y coords: " + y;
let coorP= document.querySelector("#coordinates");
coorP.innerHTML=coor;
}

//9. garbage
garbage= document.querySelector("#garbage");
let working=false;
garbage.onclick=function(){
  working=!working;

    document.addEventListener('click', function(e) {
      e = e || window.event;
      let target = e.target;
      if (target!=garbage)       target.style.display=`none`;
    });
  
}

//10. table
let tableBtn= document.querySelector("#tableBtn");
tableBtn.onclick=function(){
    let sheet = document.createElement('style');
    sheet.innerHTML = `table, th, td {
      border: 1px solid black;}`;
    sheet.append(` table {border-collapse: collapse}`)
    document.body.appendChild(sheet);
    let rows=parseInt(prompt('how many rows in the table?'));
    let columns= parseInt(prompt('how many columns in the table?'));
    let table=document.createElement(`table`);
    for (let i=0;i<rows;i++){
      table.append(document.createElement(`tr`));
      for (let j=0;j<columns;j++){
        table.querySelector("tr:last-child")
              .append(document.createElement(`th`));
        table.querySelector("tr:last-child").querySelector("th:last-child").innerHTML=`hi`;
        }
    }
document.body.append(table);
}

//11. moving the box
let box2=document.querySelector("#box2");
box2.style.top=`0px`;
box2.style.left=`0px`;
let left=document.querySelector("#left");
let right=document.querySelector("#right");
let up=document.querySelector("#up");
let down=document.querySelector("#down");

down.onclick=function(){
  box2.style.top = (parseInt(box2.style.top) + 10) + 'px';
}

up.onclick=function(){
  box2.style.top = (parseInt(box2.style.top) - 10) + 'px';
}

right.onclick=function(){
  box2.style.left = (parseInt(box2.style.left) + 10) + 'px';
}

left.onclick=function(){
  box2.style.left = (parseInt(box2.style.left) - 10) + 'px';
}

//the baloon
let baloon=document.querySelector("#baloon");
baloon.style.fontSize="100%";
let inflate=document.querySelector("#inflateBtn");
let deflate=document.querySelector("#deflateBtn");
inflate.onclick=function(){
  baloon.style.fontSize= (parseInt(baloon.style.fontSize) + 10) +`%`;
  if (parseInt(baloon.style.fontSize)>300){
    baloon.innerHTML="💥";
    inflate.style.display=`none`;
    deflate.style.display=`none`;
  }
}

deflate.onclick=function(){
  baloon.style.fontSize= (parseInt(baloon.style.fontSize) - 10) +`%`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  