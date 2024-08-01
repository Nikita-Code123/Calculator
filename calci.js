let btns=document.querySelectorAll(".btn");

function takeValue(val){ 
   document.querySelector("#input").value+=val;
    console.log("clicked");
}
function solve(){
    let x = document.querySelector("#input").value;
    let y=eval(x);
    document.querySelector("#input").value=y;
}
function clearAll(){
    let c="";
    document.querySelector("#input").value=c;
    console.log("cleared");
}
function cleared(){
   let w= document.querySelector("#input").value; 
   let y="";
   for(let i=0;i<w.length-1;i++){
    y+=w[i];
   }
    document.querySelector("#input").value=y; 
}