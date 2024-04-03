//initialise input value using id in js
const Inputbox=document.getElementById("Input-box");
//initialise list value using id in js
const list=document.getElementById("list");

// initialise a function in js
function AddTask(){
    //condition of input box value when empty 
    if(Inputbox.value === ''){
        alert("You must write something!");
    }
    //if add any value then input value append in list
    else{
        let li = document.createElement("li");
        li.innerHTML = Inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7 ";
         li.appendChild(span);
    }
    //for after add any text input displey empty
    Inputbox.value ="";
    //for save data
    SaveData();
} 

//for click function
list.addEventListener("click",function(e){
    //for checked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    //for cut the item
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false);

//function for save data
function SaveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();