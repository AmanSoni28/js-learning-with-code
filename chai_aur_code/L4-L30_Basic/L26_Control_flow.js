//if statement 
// <, >, <=, >=, ==, !=, ===, !==

if(2=="2")      //true
{
    console.log("Executed");        //run
}


if(2==="2")             //false, because check value as well as datatype
{
 console.log("Executed");
}


if(2!="2")           //false
{
    console.log("Executed");           //not run
}


if(2!=="2")           //true
{
    console.log("Executed");            //run
}

// if else

const age=10;

if(age>=18)
{
    console.log("Eligible for voting")          
}
else
{
    console.log("Not Elogible for voting")
}


const score=200;
if(score>100)
{
    const power ="fly";
    console.log(`power = ${power}`);
}

// console.log(`power = ${power}`);       //error, power is not defined, because power is block scope variable.


//if else ladder
const balance = 800;
if(balance < 500)
     console.log("balance is less than 500");
else if(balance < 700)
    console.log("balance is less than 700");
else if(balance < 100)
    console.log("balance is less than 900");
else
    console.log("balance is greater than 1000");


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard)       //both condition is true then code execute
{
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail)       //atlest one condition is true then code execute
{
    console.log("user logged in");
}

/*swich statement

 syntax:
 swich (key){
 case value:

 break;

 default :
 break;
 }                            */

 const month = 8;
 switch (month) {
     case 1:
         console.log("january");
         break;
     case 2:
         console.log("February");
         break;
     case 3:
         console.log("March");
         break;
     case 4:
         console.log("April");
         break;
     case 5:
         console.log("May");
         break;
     case 6:
         console.log("June");
         break;
     case 7:
         console.log("July");
         break;
     case 8:
         console.log("August");
         break;
     case 9:
         console.log("September");
         break;
     case 10:
         console.log("October");
         break;
     case 11:
         console.log("November");
         break;
     case 12:
         console.log("December");
         break;
     default:  
         console.log("Enter valid month")
         break;
        }

        const day = "mon";
        switch (day) {
            case "sun":
                console.log("sunday");
                break;
            case "mon":
                console.log("monday");
                break;
            case "tue":
                console.log("tuesday");
                break;
            case "wed":
                console.log("wednesday");
                break;
            case "thu":
                console.log("thursday");
                break;
            case "fri":
                console.log("friday");
                break;
            case "sat":
                console.log("saturday");
                break;
            default:
                console.log("write valid day")
                break;
        }


/*falsy value:
false, 0, -0, BigInt 0n, "", '', null, undefined, NaN

truthy value:
true, "0", 'false', infinity,  " ", [], {}, function(){}       */

if({})
{
    console.log("Hello");       //run
}

if([])
{
    console.log("Hello2");       //run
}
if("false")
{
    console.log("Hellom");       //run
}
if("")
{
    console.log("Hello8");       //not run
}
if(0)
{
    console.log("Helloj");       //not run
}
if(NaN)
{
    console.log("Helloo");       //not run
}
if(-56)
{
    console.log("Helloa");       //run
}
if(null)
{
    console.log("Hello4");       //not run
}
if("null")
{
    console.log("Hello5");       //run
}
if(function(){})
{
    console.log("Hello1");       //run
}
if(Infinity)
{
    console.log("Hello11");       //run
}
if(-Infinity)
{
    console.log("Hello12");       //run
}
if("aman")
{
    console.log("AMAN");         //run
}        

const userEmail = [];
if(userEmail.length===0)
{
    console.log("Arr is empty");      //run
    
}
     
const emptyobj = {};
if(Object.keys(emptyobj).length === 0)
{
    console.log("Object is Empty");
}
   
//some important information
    if(false==0)    
    {
        console.log("yes");     //run
    }
    if(false=="")    
    {
        console.log("yes1");     //run
    }
    if(""==0)    
    {
        console.log("yes2");     //run
    }
    
        
/*Nullish Coalescing Operator (??): null, undefined
The Nullish Coalescing Operator (??) is a logical operator in JavaScript that returns the right-hand operand 
if the left-hand operand is null or undefined, otherwise, it returns the left-hand operand. */

const val1 = 5 ?? 10;
console.log(val1);        //return 5

const val2 = null ?? 10;       //return 10
console.log(val2); 

const val3 = undefined ?? 10;          //return 10
console.log(val3); 

const val4 = null ?? 5 ?? 10;         //return 5
console.log(val4); 


//Ternary Operator

// condition ? true : false

const num = 5;
num%2==0 ? console.log("Even") : console.log("Odd");        //return Odd