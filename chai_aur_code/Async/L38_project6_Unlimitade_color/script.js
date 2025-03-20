const randomColor = function () {
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
     color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let Interval;
document.querySelector("#start").addEventListener("click",function (){
    if(Interval==null){       //if condition is not apply so when we click start button many time so this code run many time and then stop button not work
    Interval=setInterval(function (){
    document.body.style.backgroundColor=randomColor();
    },1000);
    }
});

document.querySelector("#stop").addEventListener("click",function (){
    clearInterval(Interval);
    Interval=null;
});