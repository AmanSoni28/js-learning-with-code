//remove the comment from line (3-15) and comment the line (17-30) and run then 

// function SetUsername(username){
//     this.username=username;
//     console.log("run");
// }

// function createUser(username,email,password){
//     SetUsername(username);          //SetUsername function is call, run and leave the stack
//     this.email=email;
//     this.password=password;
// }

// const chai = new createUser("AMAN","amansoni0228@gmail.com","1234");

// console.log(chai);               //return : run ,createUser { email: 'amansoni0228@gmail.com', password: '1234' }
                                    

function SetUsername(username){
    this.username=username;
    console.log("run");
}

function createUser(username,email,password){
    SetUsername.call(this,username);      //call pass the the current constex of 'createUser' function to 'SetUsername' function using 'this'. 
                                          // SetUsername function is call, run and leave the stack but run in current constex of 'createUser' so 'createUser' have the refrence of 'SetUsername'
    this.email=email;
    this.password=password;
}

const chai = new createUser("AMAN","amansoni0228@gmail.com","1234");

console.log(chai);              //return : run, createUser { username: 'AMAN', email: 'amansoni0228@gmail.com', password: '1234'}


//note: call() => pass the 'current excution constex' to another 