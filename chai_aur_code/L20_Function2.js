// The rest operator (...) in JavaScript allows you to collect multiple elements into a single array or object

function totalshoping(price)
{
    return price;
}

console.log(totalshoping(200,400,500));                   //return 200

function totalshoping1(... price1)
{
    return price1;
}

console.log(totalshoping1(200,400,500));                  //*return [ 200, 400, 500 ]

function totalshoping3(price1,price2,...price3)
{
    return price3;
}

console.log(totalshoping3(200,400,500,600));              //return [ 500, 600 ]

// <--------------------------------------------------------------------------------->

//how to pass object in function

const user={     
    name : "Aman",
    age : 23
}

function fun(anyobj)
{
       console.log(`name of user is ${anyobj.name} and age is ${anyobj.age}`);
}

fun(user);                                            //return name of user is Aman and age is 23

fun ({                                                //return name of user is Ankit and age is 25, here direct pass an object
    name: "Ankit",
    age: 25
})

//how to pass Array in function

const arr=[23, 40,56 ,78];

function funn(anyarr)
{
       console.log(anyarr[1]);
        
}

funn(arr);                                             //return 40

funn([34, 50, 67, 90])                                 //return 50