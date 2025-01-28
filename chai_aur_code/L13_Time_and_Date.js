/* JavaScript "Date" objects represent a single moment in time in a platform-independent format. 
   Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).    */

   let myDate = new Date();
   console.log(typeof myDate);                            //*return object
   console.log(myDate);
   console.log(myDate.toString());
   console.log(myDate.toDateString());
   console.log(myDate.toISOString());
   console.log(myDate.toJSON());
   console.log(myDate.toLocaleString());
   console.log(myDate.toLocaleTimeString());
   console.log(myDate.toLocaleDateString());
   
let myCreatedDate=new Date(2025, 0, 29);                 
console.log(myCreatedDate.toLocaleString());               //return 1/29/2025, 12;00;00 AM, in this way  month start with 0

let curentDate=new Date(2025, 1, 28, 8, 5, 2);
console.log(curentDate.toLocaleString());

let nowDate= new Date("01/14/2025");
console.log(nowDate.toLocaleString());

// <-----Important----->
let myTimeStamp = Date.now();
console.log(myTimeStamp);                                  //return 1738096855288, this is time in milisecond from 1970 to current date
   
console.log(Date.now());                                   //return 1738097182427, this is time in milisecond from 1970 to current date                                 

console.log(Math.floor(Date.now()/1000));                  //*return 1738097384,  this is time in second from 1970 to current date         


let newDate= new Date();
console.log(newDate.getMonth());                            //return 0, which is jan, jan is current month  
console.log(newDate.getDate());                             //return 29, which is current Date

console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString("default", {
         weekday: "long"                                             // click control+space to see option, and costomoze LocaleString function 
}                                                                    //return wednesday
));

