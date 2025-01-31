// <--------------------Object Constractor Notation---------------------->

const instaUser = new Object() ;                //Object create with "singleton"
console.log(instaUser);                         //return {}, this shows Enpty object  
console.log(typeof instaUser);                  //return object

//Add something in Object
instaUser.Name= "Aman";
instaUser.age= 23;
console.log(instaUser);                         //return { Name: 'Aman', age: 23 }

//two way of acces object
console.log(instaUser.Name);                    //return Aman,   1 way by dot(.) operator
console.log(instaUser["Name"]);                 //return Aman,   2 way by square bracket

// note: No any difference Between object literal and object constractor, only difference is, object constractor create the "singleton" object and object literal does not create "singleton" object
// <----------------------------------------------------------------------------------------------------------->


const faceUser = {}
faceUser.id= "123abc";
faceUser.name= "Shubham";
faceUser.isLoggIn= false;

console.log(faceUser);                                  //return { id: '123abc', name: 'Shubham', isLoggIn: false }
console.log(Object.keys(faceUser));                     //*return [ 'id', 'name', 'isLoggIn' ], return all keys inside of an array
console.log(Object.values(faceUser));                   //return [ '123abc', 'Shubham', false ], return all values inside of an array
console.log(Object.entries(faceUser));                  //return [ [ 'id', '123abc' ], [ 'name', 'Shubham' ], [ 'isLoggIn', false ] ], 
console.log(faceUser.hasOwnProperty("name"))            //return true, here we asked to object has property(name) or not
console.log(faceUser.hasOwnProperty("fullid"))          //return false


//Object in side of Object
const newuser= {
    email : "some0228@gmail.com",
    fullName : {
         userName : {
            firstName : "Abhinav",
            lastName : "Vishwakarma"
    }
    }
}

console.log(newuser.fullName);                          //return { userName: { firstName: 'Abhinav', lastName: 'Vishwakarma' } }
console.log(newuser.userName);                          //return undefined, direct not access
console.log(newuser.fullName.userName);                 //return { firstName: 'Abhinav', lastName: 'Vishwakarma' }
console.log(newuser.fullName.userName.firstName);       //return Abhinav


//<---------------merge objects-------------------->

const obj1 = { 1: "a" , 2: "b"};
const obj2 = { 3: "c" , 4: "d"};

const obj3 = { obj1 , obj2};                            //*here two object(obj1,obj2) inside of an anther object(obj3) but not merge
console.log(obj3);                                      //return { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 =Object.assign({}, obj1, obj2)               //assign obj1 and obj2 in {} 
console.log(obj4);                                      //return { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//best way of merge two or more objects by spread operator
const obj5 = {...obj1, ...obj2}
console.log(obj5);                                      //return { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//object insine of array
const info= [ 
    {id : 4, pass : "aamm" }, 
    {id : 5, pass : "aabb"}
 ]

console.log(info[1].id, info[0].pass);                  //return 5 aamm
