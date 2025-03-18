const form=document.querySelector("form");                     //we select 'form' because 'form' has 'submit' button,     'form' is submit
// const height = parseInt(document.querySelector('#height').value)           // this usecase will give you empty, when event star page loaded and height will we empty
form.addEventListener("submit", function(e){
    e.preventDefault();         //use to stop submission to server
    const weight=parseInt(document.querySelector("#weight").value);            //to take value of weight
    const height=parseInt(document.querySelector("#height").value);            //to take value of height
    const results=document.querySelector("#results");
    if(height<0 || height === "" || isNaN(height))
     {
      results.innerHTML=`please give the valid height ${height}`;
     }
    else if(weight<0 || weight==="" || isNaN(weight))
     {
      results.innerHTML=`please give the valid weight ${weight}`;
     }
    else
     {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6)
        {
            results.innerHTML=  `bmi = ${bmi} (Under Weigh)`;
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
            results.innerHTML=  `bmi = ${bmi} (Normal Range)`;
        }
        else
        {
            results.innerHTML=  `bmi = ${bmi} (Overweight)`;
        }
     }
});