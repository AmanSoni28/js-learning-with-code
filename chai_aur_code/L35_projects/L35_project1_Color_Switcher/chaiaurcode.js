const buttons = document.querySelectorAll(".button");              //buttons have all buttons as a NodeList
const body = document.querySelector("body");

buttons.forEach((button) => {   
console.log(button);
button.addEventListener("click",function (e) {                  //EventListener->use to do some event            
    // console.log(e);                        //e->mouse(Pointer)Event, because 'click' is the 'mouseEvent',      note: for outbut click the any box
    // console.log(e.target);                 //e.target->have all the value where from the 'event' is come     
const val=e.target.id;
switch(val){
    case "grey":
    body.style.backgroundColor=e.target.id;
    break;
    case "red":
    body.style.backgroundColor=e.target.id;
    break;
    case "blue":
    body.style.backgroundColor=e.target.id;
    break;
    case "yellow":
    body.style.backgroundColor=e.target.id;
    break;
    default:
    body.style.backgroundColor="white";
    break;
}

// if(e.target.id === "grey"){
//     body.style.backgroundColor=e.target.id;
// }
// if(e.target.id==="white"){
//     body.style.backgroundColor=e.target.id;
// }
// if(e.target.id==="blue"){
//     body.style.backgroundColor=e.target.id;
// }
// if(e.target.id==="yellow"){
//     body.style.backgroundColor=e.target.id;
// }
});
});


