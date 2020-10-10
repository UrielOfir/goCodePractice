//1. you can run JS from the HTML file, or you can connect to a seprate file
//2. You get 'undefined' when you declared the variable but didn't put information in it.
// Uncaught ReferenceError: x is not defined when it's not declared.
//3.  https://javascript.info/types: Number. BigInt. String. Boolean. Null. Undefined. (Object)
// When adding a number and a string, JavaScript will treat the number as a string. JavaScript evaluates expressions from left to right. Different sequences can produce different results.
//4. https://www.tutorialsteacher.com/javascript/javascript-operators#
// 5. I didn't understand the question. There is Ternary.


let text;
let print=document.createElement("p");
let place=document.getElementById("print");

// Functoins
/************/
// 1. name

let name= "uriel";

if (0)
    Hello (name);

function Hello (name){
    alert(`Hello ${name}`);
}

// 2. Weather
if(0)
    whatToWear(10)

function whatToWear (temprature ){
    if (temprature<0)
        console.log("It's frozen outside. Please wear warm clothes");
    else if (temprature<20)
        console.log("It's pretty colde outside. Please wear autumn clothes");
    else
        console.log("it's hot. You should wear light clothing.")
}

//5. The bigger
if (0)
    whoIsBigger;
function whoIsBigger(){
    let numbers=prompt("Enter two numbres seperated by ','", "0,0");
    let num1= parseInt(numbers.split(",")[0]);
    let num2= parseInt(numbers.split(",")[1]);
    if (num1>num2)
        alert (`${num1} is bigger`);
    else
        alert(`${num2} is bigger`);
}

// 6. type of
if (0){
    let x=true;
    console.log( type (x));

    function type(parameter){
        return typeof(parameter);
    }
}

//7. toggle boolean.
if (0){
    let bool=true;
    bool= toggle(bool);
    console.log(bool);
    function toggle (bool)
    {
        return !bool;
    }
}

//For loops
/******* */
//1. ten times what the user wrote;
if (0){
    let toPrint=prompt("what do you want me to print?");
    for (let i=0; i<10;i++){
        document.getElementById("forLoops").textContent+=toPrint+" ";
    }
}

//2. Print hello as many times as user asks.
if (0){
    let times= parseInt(prompt("How many times do the loop?"));
    for (let i=0; i<times;i++){
        document.getElementById("forLoops").textContent+="hello ";
    }
}

//3. average
if (0){
    let length= parseInt(prompt("How many scores?"));
    let scores=[];
    let avarage=0;
    for (let i=0;i<length;i++){
        scores[i]= parseInt(prompt("Enter a score."));
        avarage+=scores[i];
    }
    avarage=avarage/length;
    text = document.createTextNode(`the avarage of the scores is ${avarage}`);
    print.appendChild(text);
    place.appendChild(print);

}

//4. until stop

if (0){
    let word=0;
    do {
        word=prompt("Enter a word to print. write 'stop' to stop");
        
        if (word!=null){
            text= document.createTextNode(`${word} `);
            place.appendChild(text);    
        }
        
    }while (word!="stop");
}

//strings
//********* */
//3. how many time in a string
if (0){
    text= prompt("enter a string");
    let char= prompt("enter a char");
    let howMany=0;
    for (let i=0;i<text.length;i++){
        if (char===text[i])
            howMany++;
    }
    alert (`the char ${char} is ${howMany} in ${text}`);
}
// combine two strings
if (0)
{
    text=prompt(`enter a string`);
    let text2= prompt(`enter a second string`);
    let combine="";
    let length= (text.length>text2.length)? text.length : text2.length;
    let short= (text.length<text2.length)? text.length : text2.length;
    let longest= (text.length>text2.length)? text : text2;
    let index=0;
    for (let i=0; i<length;i++){
        if (i<short){
            combine=combine.concat(text[i]);
            combine=combine.concat(text2[i]);
            index+=2;
        }
        else{
            combine=combine.concat(longest[i]);
            index++;
        }
    }
    alert(combine);
}
//7. clean the letters that reapet

if(0){
    text=prompt(`your string`);
    for (let i=0; i<text.length;i++){
        for (let j=i+1;j<text.length;j++){
            if (text[i]===text[j]){
                text=spliceSlice(text,j,1);
                j--;
            }
       }
    }
    
    
    console.log(text);
}


//8. one letter
if(0){
    text=prompt(`your string`);
    let accured=0;
    for (let i=0; i<text.length;i++){
        accured=0;
        for (let j=i+1;j<text.length;j++){
            if (text[i]===text[j]){
                text=spliceSlice(text,j,1);
                j--;
                accured=1;
            }
       }
       if (accured==0){
           console.log(`the first letter which occourd once is ${text[i]}`);
           i=text.length;
       }
    }
    console.log(text);
}


// objects
//******* */
//1-2-3 object cat
if (1){
    let cat = {
        name: "Moshe",
        age: null,
        color:null,
        wheight:null,
        sleep: function(){alert ("I'm sleeping");},
        awake: function(){alert (`I wake up`);},
    }
    let dog={
        gender: "male",
        owner: "Uriel",
    }

    let newProperty= prompt("enter new property");
    let propertyValue= prompt(`enter property value`);
    cat[newProperty]= propertyValue;
    console.log(cat);

    function checkName (cat,string){
        if(string==cat.name){
            alert(`It's the name of the cat`);
        }
        else{
            alert(`You're wrong the cat mame is ${cat.name}`);
        }
    }
    checkName (cat,prompt(`Enter your gess about the cat name`));  
   

    // 4. combine two objects
    function combine (firstObject, secondObject){
        let combine={};
        for (let k in firstObject) combine[k]=firstObject[k];
        for (let k in secondObject) combine[k]=secondObject[k];
        return combine;
    }
    let combined = combine(cat,dog);
    console.log(combined);  

    let cats={};
    for (let i=1;i<10;i++){
        cats[`cat${i}`]= cat;
        cats[`cat${i}`].color=prompt(`Give cat${i} a color`);
    }
    console.log(cats);

}

//arrays
/* ****** */
//14. sort up or down

if (0){
    let array=[10,5,7,3,4,9];
    upDown("down",array);
    console.log(array);
}


function upDown (whatToDo,array){
    if (whatToDo=="up"){
        array.sort(function(a, b) {
            return a - b;
          });
    }
    else{
        array.sort(function(a, b) {
            return b - a;
          });
    }
}

function replace(array,index1,index2){
    let temp=array[index2];
    array[index2]=array[index1];
    arrray[index1]=temp;

}

function spliceSlice(str, index, count, add) {
    return str.slice(0, index) + (add || "") + str.slice(index + count);
  }