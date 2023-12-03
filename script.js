console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

let buttonLinks = document.getElementsByClassName("button-link");


let buttonContents= document.getElementsByClassName("buttonContent");

for(let i=0;i<buttonLinks.length;i++){

    buttonLinks[i].addEventListener("click",makeContentAvailable);

}

function makeContentAvailable(event){

    
for(let i=0;i<buttonLinks.length;i++){
    if(buttonLinks[i] == event.target){

        event.target.classList.toggle("active-link");
    }
    else{
        buttonLinks[i].classList.remove("active-link");
    }
}
    

    for(let i=0;i<buttonContents.length;i++){
        if (event.target.id == buttonContents[i].getAttribute("data-section") ){
            buttonContents[i].classList.toggle("active-content");  
        }
        else{
            buttonContents[i].classList.remove("active-content");  
        }
    }



}

//display menuBar

// let menubar = document.querySelector(".rightMenuBar");
// console.log(menubar);

let navBar = document.querySelector(".mynav");






let menuButton = document.querySelector(".menubutton");


menuButton.addEventListener("click",showMenubar);

function showMenubar(){
   


navBar.style.right= "0%";
    
}

let closeButton = document.querySelector(".closeButton");





closeButton.addEventListener("click",closeMenubar);

function closeMenubar(){
   

    // navBar.classList.add("hide");
    navBar.style.right= "-40%";
    
}



let submitButton= document.getElementById('finalSubmit');
let textArea = document.getElementById('textarea');
console
let input = document.querySelectorAll('.inputInfo');
console.log(input);

function clearData(){

    textArea.value='';
    input.forEach((e) =>{

       e.value='';
    })
    
}

submitButton.addEventListener("click",clearData)

