//Loop and if statement
function letterFinder(word, match) {
    for(let i = 0; i < word.length; i++){
        if(word[i] == match){
            if( match == "t"){
                console.log(match + ", Found at position " + i)
            }else {
                console.log('Found the', match, 'at', i);
            }
        }else {
            console.log('---No match found at', i);
        }
    } 
}
//using export
export{letterFinder};
// Object
const successGene = {
    "Waking Hour": "4AM",
    "Sleeping Hour": "8PM",
    Thought: "Making Money At Every Hour"
}
console.log(successGene["Sleeping Hour"]);
console.log(successGene.Thought);
successGene.making_dollar = "yes";
console.log(successGene);

// Array and ternary operator
function arrayBuilder(...arr){
    const array = [];
    array.push(...arr);
    return array;
}
let simpleArray = arrayBuilder('apple','berry','catFood','sharp');
console.log(simpleArray);

//random number
function randomNumbers(){
    let decimal = Math.random() * 10;
    decimal = Math.ceil(decimal);
    console.log(decimal);
}
randomNumbers()

//Array
clothes = [];
clothes.push('verse');
clothes.push('eko');
clothes.push('gucci');
clothes.push('ok');
clothes.push('verse');
clothes.pop();
clothes.push('Lines');
console.log(clothes[2]);

//Object
favCar = {};
favCar.color = "dodgerBlue"
favCar.convertible = "Opened"
console.log(favCar);

const car = {
    color: 'Blue',
    convertible: true,
    model: 'Toyota',
    active: false,
    LightOn: false,
    turnTheKey: function() {
        car.active = true;
        return 'Done';
    },
    carLightOn: function() {
        return "engine running"
    }
}
console.log(car.turnTheKey())
console.log(car);


    const newCar = {
        color: "green",
        active: false,
        lightOn: false,
        turnTheKey: function(par) {
            newCar.active = par;
            return 'Done';
        },
        turnTheLight: function(par) {
            newCar.lightOn = par;
        }
    }
function theNewCar(parameter) {
    newCar.turnTheKey(parameter);
    newCar.turnTheLight(parameter);
}
theNewCar(true);
console.log(newCar.active);
console.log(newCar)

//try and catch
try{
    theNewCar(true);
    console.log(newCar.active);
    console.log(newCar);
}catch(err) {
    console.log(err)
    console.log('this is where the error is from')
}

//typeof
const evaluator = typeof(newCar)
const evaluated = typeof(theNewCar)
console.log(evaluator +', ' + evaluated);

//tasks
function addTwoNum (a, b) {
    try{
        if(typeof(a) !== "number"){
            throw new ReferenceError('the first argument is not a number');
        } else if(typeof(b) !== "number"){
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    }catch(err) {
        console.log("Error!", err);
    }
    return "Done";
}
addTwoNum(5, "5");
console.log("It still works")

//Defensive programming
function letterFinder1(word, match){
    const condition1 = typeof(word) == "string" && word.length > 1;
    const condition2 = typeof(match) == "string" && match.length < 2;
    if(condition1 && condition2){
        for(i = 0; i < word.length; i++){
            if(word[i] == match){
                console.log('Found the', match ,'at', i)
            }else {
                console.log('---No match found at', i);
            }
        }
    }else {
        console.log("PLease pass correct arguments to the function");
    }
}
letterFinder1("cat", "t");

/* 
Arrays 
Object 
Function
Errors
Null, undefined and Empty
Error Prevention
Type of Error
Defensive programming
*/

//Functional programming : There are several paradigms in coding and a common one is known as FP where we use functions and variables declarations
//We keep functionalities and data separately

//Object Oriented Programming : Another paradigm is the OOP 
//We group data and functionality as property and methods inside object

var virtualPet = {
    "Sleepy" : true,
    nap : function(prop){
        this.Sleepy = prop;
    }
}
virtualPet.nap(false);
console.log(virtualPet.Sleepy);

//Recursion 
/*
ALgorithm for recursion
==> Base Case 
if statement
"Contains code to end the program"
==> Recursive call to itself
else statement
"The recursion is mainly called in the else statement"
*/

function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    }else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(8))

//FP
let ShoeCost = 40;
let tax = 1.29;

function shoePrice(){
    return ShoeCost * tax;
}
let totalShoeCost = shoePrice(); 
console.log(totalShoeCost)

//OOP
let totalPrice = {
    shoeCost: 40,
    tax: 1.29,
    shoePrice: function(){
        return this.shoeCost * this.tax;
    }
}
let totalShoeCost2 =  totalPrice.shoePrice()
console.log(totalShoeCost2);

//Constructor Function
new Date();
new Error();
new Promise();
new Set();
new WeakSet();
new WeakMap();


