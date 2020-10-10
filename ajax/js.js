let searchWord=document.querySelector(`#searchWord`);
let searchBtn=document.querySelector(`#searchBtn`);
let clearBtn=document.querySelector(`#clearBtn`);
let gallery=document.querySelector(`#gallery`);

let gifReq = new XMLHttpRequest();
gifReq.responseType= `json`;
gifReq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
searchBtn.onclick=function(){
    gifReq.open("GET", `https//:api.giphy.com/v1/gifs/search?q=${searchWord.nodeValue}&api_key=wfmFjANeStSqa1nF1FjnfRA5EaUZx1Z2`,    true);
    gifReq.send();
    searchWord.value=``;
}