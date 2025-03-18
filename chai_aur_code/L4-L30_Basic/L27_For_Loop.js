// For Loop

for(let i=1; i<=10; i++)
{
    if(i==5)
    {
        console.log("5 is best number")
    }
    else{
    console.log(i);
    }
}


for (let i = 1; i <= 10; i++) 
{
    console.log(`table of ${i}`);
    for (let j = 1; j <= 10; j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myarr = ["AMAN", "ANKIT", "KHUSHI"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}


//break and continue

for (let i = 0; i <= 10; i++) {
    if(i==5){
        console.log("5 is detected");
        break;                           //break is use to go out of loop or switch case
    }
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if(i==5){
        console.log("5 is detected");
        continue;                      //after continue control go to the next iteration not run forther code
    }
    console.log(i);
}





