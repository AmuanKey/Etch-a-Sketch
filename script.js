
let container=document.querySelector(".container");
var gridNum;
let input = document.querySelector(".input");
let goBtn = document.querySelector(".go");
goBtn.addEventListener("click",()=>{



gridNum = input.value;

if (gridNum > 30) {
    alert("Your grid cannot be more then 30 i.e (30x30)");
}else{

let containerSize = gridNum *20 + "px" ; 


container.style.width = containerSize;
for (let i = 0; i < gridNum*gridNum; i++) {
  
var box = document.createElement("div");
box.style.width = "20px";
box.style.height = "20px";
box.style.display = "inline-block";
box.style.border = "1px solid black";
box.id = i;
container.appendChild(box);
    
}
}

});


container.addEventListener("mouseover",(e)=>{

    e.target.style.backgroundColor = 'red';
  
  })

let resetBtn=document.querySelector(".reset");
resetBtn.addEventListener("click",()=>{
    location.reload();
})

