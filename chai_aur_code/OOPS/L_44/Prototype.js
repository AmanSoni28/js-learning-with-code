//note: strint,Array,function all have the protype of Object;
//so if i create own prototype in Object it is access by string,array and function;
//but if i create own prototype in array so it is not ccess by function and string (also vice-ersa)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                    //create own prototype in Object
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){                  //create own prototype in Array
    console.log(`Hitesh says hello`);
}

heroPower.hitesh();
myHeros.hitesh();
myHeros.heyHitesh();
// heroPower.heyHitesh();                //error : because object can not access the protype of Array


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);                    //'this' use for current contex
    console.log(`True length is: ${this.trim().length}`);
}

 anotherUsername.trueLength();         //retutn : ChaiAurCode, True length is: 11
                                        
"hitesh  ".trueLength();               //return : hitesh, True length is: 6
"iceTea".trueLength();                 //retutn : iceTea, True length is: 6


// <-----------------------------------inheritance------------------------------------------>

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__: TeachingSupport             //old way of inharihace ,here TASupport inharit the property of TeachingSupport 
}

//Teacher.__proto__ = User;                     //old way of inharihace ,here Teacher inharit the property of User 

// modern syntax
Object.setPrototypeOf(TASupport, TeachingSupport)     //here TASupport inharit the property of TeachingSupport
console.log(TASupport.isAvailable)      //false


