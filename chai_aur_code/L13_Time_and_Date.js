/* JavaScript "Date" objects represent a single moment in time in a platform-independent format. 
   Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).    */

   let myDate = new Date();
   console.log(typeof myDate);                            //*return object
   console.log(myDate);                                   //return 2025-01-28T21:16:54.040Z
   console.log(myDate.toString());                        //return Wed Jan 29 2025 02:46:54 GMT+0530 (India Standard Time)
   console.log(myDate.toDateString());                    //return Wed Jan 29 2025
   console.log(myDate.toISOString());                     //return 2025-01-28T21:16:54.040Z
   console.log(myDate.toJSON());                          //return 2025-01-28T21:16:54.040Z
   console.log(myDate.toLocaleString());                  //return 1/29/2025, 2:46:54 AM
   console.log(myDate.toLocaleTimeString());              //return 2:46:54 AM
   console.log(myDate.toLocaleDateString());              //return 1/29/2025
   
let myCreatedDate=new Date(2025, 0, 29);                 
console.log(myCreatedDate.toLocaleString());               //return 1/29/2025, 12;00;00 AM, in this way  month start with 0

let curentDate=new Date(2025, 1, 28, 8, 5, 2);
console.log(curentDate.toLocaleString());                 //return 2/28/2025, 8:05:02 AM

let nowDate= new Date("01/14/2025");
console.log(nowDate.toLocaleString());                     //return 1/14/2025, 12:00:00 AM

// <-----Important----->
let myTimeStamp = Date.now();
console.log(myTimeStamp);                                  //return 1738096855288, this is time in milisecond from 1970 to current date
   
console.log(Date.now());                                   //return 1738097182427, this is time in milisecond from 1970 to current date                                 

console.log(Math.floor(Date.now()/1000));                  //*return 1738097384,  this is time in second from 1970 to current date         


let newDate= new Date();
console.log(newDate.getMonth());                                     //return 0, which is jan, jan is current month  
console.log(newDate.getDate());                                      //return 29, which is current Date

console.log(newDate.toLocaleString());                               //return 1/29/2025, 2:46:54 AM
console.log(newDate.toLocaleString("default", {
         weekday: "long"                                             // click control+space to see option, and costomoze LocaleString function 
}                                                                    //return wednesday
));

