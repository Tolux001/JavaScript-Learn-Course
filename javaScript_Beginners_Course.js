//Check the test.js folder to confirm the running of all the program

// "use strict"; is written in a function block or in a code to make sure every variable are declared or assigned


//inline comment 'to prevent the console from seeing my text; used for not and suggestions...... etc
/* Multiple line comment
    spans
        across
            various
                lines*/

/*data type:
undefined, null, boolean, numbers, strings, object*/
// undefined means  the variable value or variable name does not exist while nul is more of a keyword indicating nothing i.e void 

//Declarations of variable
const number = 3.8;
var boolean = true;
let nameOfBoy = "Toluwalase";

//Declaration And Assigning 
let valueTag;
valueTag = false;
const pornTv = 10;

//Ways of adding and subtracting
var a = 5;
var b = 6;
 a = a + 5;
a += 9;
a++;
 b = a - 5;
a -= 9;
a--;
//symbols: * : / : + : - %

// strings with escape literal
const nameValueMom = "The name of my \"MOM\" is  Adejuwon Halimat";
const nameValueDad = 'The name of my "DAD" is Adejuwon Adedeji';
const nameValueTolux = `Here i can use both a 'single' quote and a "double" quote easily`;

//More on escape literals
/* \\ black slash
    \/front slash
    \n new line
    \t tab
    \b back space */

    const windowSpace = "my name is \n \t Toluwalase Peter";
    console.log(windowSpace);
//concatenating strings
const myName = "Toluwalase"
let greeting = "hello greetings from " + myName + ", we welcome you to the club"
var someAdjective = "worthwhile";
var myStr = "learning to code is ";
myStr += someAdjective;

let lengthOfLetter = 0;
const letter = "toluwalase";
lengthOfLetter = letter.length;

//Array
const myArr = [10, 20, 30, 40, 50];

//index of array
var myArrData = myArr[0];

//modifying array
myArr[2] = 90;
// .push adds to the back of an array 
myArr.push(60, 70);
// .pop to remove last element in an array
myArr.pop();
// .shift  remove the first element in the array :shift and pop can be used to get values in an array
myArr.shift();
// .unshift add element to the end of the array
myArr.unshift("element");
//.map : function call: to iterate and perform function over specific array
myArr.map((num) => console.log(num * 5))
//.ForEach : function call : to iterate over an array : always use arrow function when dealing with map, forEach, filter
myArr.forEach((key) => console.log(`The values are: ${key}`))
//.filter : function call : to iterate over specific array
myArr.filter((num) => console.log(num * 5 === 150))

//Data Structure
//map && Set : to create map, we use the key word new map() and the prototypes, which are not really prototype are called with .set(........) and they are fetched wit .get(...............)
let newTest = new map();
newTest.set(1, "whatever is to be stored");
newTest.set(3, "blackSheep")

newTest.get(3)// print the value under element 3

//typeof() : to know the data type of an element


// converts a number in base 10 to any base specified in the bracket after toString
//(base_ten_value).toSting(desired_base);
//Convert a number data type to string
//.toString();
//to double a value 
//doubleIt(value)

//functions
function wordBlank(adjective, noun, verb, adverb){
    let result = "";
    result += "The "+ adjective + " is very " + noun + " and it " + verb +" so "+ adverb;
    console.log(result);
}
console.log(wordBlank("dog", "big","ran","quickly"));

function ourFunctionWithArgs(a, b) {
    return a + b;
}
ourFunctionWithArgs(10, 20);

//ES6 function format
let myFunctionWithArgs= (c, d, e)=> {
    let bagPrice = 10;
    return bagPrice += d - e *  c;
}
myFunctionWithArgs(4, 10, 50);

//Global scope are always written outside of a function in the same condition where the said function can read through it,
//A scope is also said to be global when  called in a function but it is not declared with a variable
// A local variable is one that is created in a function bracket

// If statement : Are conditional statement 
function statementAltered(isItTrue) {
    let word = "";
    if (isItTrue){
        word = "Very well done";
    }else {
        word = "Change your ways";
    }
    return word;
}
statementAltered(true);

// Assignment operator: =; Equal to operator: ==; Strict Equal operator: ===;
// Not operator: !; Not Equal to operator: !=; Strict Not Equal operator: !==;
// &&  || : And / Or Operator

//switch statement, just like the if conditional statement : Instead of if, it uses switch(values) {}
function functionName(indicator) {
    switch(indicator){
        case a:
            return statement;
        case b:
            return statement;
    }
}

//Math Constant

Math.ceil() //round Up
Math.floor() // round down
Math.round() // round to the closest either up or down
Math.trunc() // trims the decimal and leaves the integer


//Objects: Can contain all elements

let myDog = {
    "name": "Lucky",
    "age": 1,
}
// Accessing objects: dot notation or bracket notation
myDog.name;
myDog["age"];

//Skip this till you want to learn class[ln-347]
//for of function for looping through object 
const objectList = {
  "speed": 20,
  "takeAway": 40,
  "today" : 100,
  "tomorrow" : 200,
  "next" : 400
}
for(prop of Object.keys(objectList)){
  console.log(prop +": "+ objectList[prop]);
}

//Looping through item with for loop
const colors = ['red','orange','yellow']
for (color of colors) {
    console.log(color);
}
for (color in colors) {
    console.log(color);
}
for(i = 0; i < colors.length; i++){
    console.log(colors[i])
}


//object.key function is used to get the properties of an object also known as object keys and array forEach execute a function on all element: In  this instance, we deal with object property:
const objectList1 = {
  "speed": 20,
  "takeAway": 40,
  "today" : 100,
  "tomorrow" : 200,
  "next" : 400
}
const arrayList1 = []

const objectArray = Object.keys(objectList1);
console.log(objectArray);

objectArray.forEach(function(key){
  arrayList1.push(key);
})
console.log(arrayList1);


//set prodigy and spread
const spreadInSetArray = ["one", 2, 3, 4, 5, 6, 7, 8]
const myNewSet = new Set();
myNewSet.add(spreadInSetArray);
//myNewSet.add([...spreadInSetArray])

console.log(myNewSet)


//IMPORTANT: When writing for loop for an object, do not use more than one if statement "the else if statement or the else will overwrite the value of your if". use OR(||) and your else statement should be outside the for loop

/*updating objects: 
  ~ Using assignment operator to add word :myDog.name = "Lucky"
      ~ We can also use the *delete* key word to remove : delete myDog.age
            ~hasOwnProperty(); used to check for a property exist in an object: hasOwnProperty(myDog.legs)
                ~Object.keys(): to print the property key of an object;console.log(Object.keys(contacts[0])[0])
                    ~Object.freeze(objectName); is used to make sure an array or object are not mutable  
*/

//while loop 
/* Has a starting value, follow by while statement which inside it, it has ending state and the incrementing */
let i = 0;
while(i < 5){
    i++;
}

//for loop; format: for(initial variable; stopping variable; increment)
for(i = o; i < 20; i++){}
//used to generate random numbers btw 0 and 1 but not one
Math.random()

//converting a string to an integer to prevent the error "NAN", we use *parseInt(string)*
multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1];

//ternary operator can also be used to replace if/ else statement 
/* Can be written like
    function functionName(a, b){
        return a > b ? statement for if : statement for else;
    }   */
    //Ternary Operator can also be chained 
/*  function functionName(a, b){
        return (a > b) ? statement for if 
        :(a === b) statement for else if
        :statement for else;
    } */
// let can be re assign since it can be changed but can't be redeclare while var can!
// let is a global scope whose function can be used outside of the box 
[test.js, ln-460];

// Recursion Explained 
/* recursion is used to repeat a function which is similar to a loop, but it can be called to a element of 'n function' i.e not specified function
    recursive function are always written in an if-else statement which state first when the statement should stop and if it hasn't archive that hight,
    it would enter another function and runs under  */
//pseudocode for recursive function
function functionName(_recursive){
    //function statement
    //block statement: that specifics it should stop when a condition has been met
    if(true) {
        return "the stopping message";
    }else {
        // return recursive function   
        //return functionName(recursive);
    }
}
[test.js, ln-374,ln-441];

//Arrow function
// Old version
function functionName(){
    return "Tolux001"
}
//Anonymous function with arrow function
const functionName = () =>
    "Tolux001";

let myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
}
let myConcat2 = (arr1, arr2) => arr1.concat(arr2);

//Default parameters
const myFunc = (title = "boss") => "Sup my" + title;
console.log(myFunc('Gee'));
console.log(myFunc());
[test.js, ln-443];

//Rest Parameter And Spread operator: "...";
/* Rest is used in a function which can take various number of arguments,
        we don't need a specific number of parameter to match the argument 
            Important Factors when using rest in a function are :
                *.length
                    *for loop
    Spread : Is used in an array to duplicate another array or other function mostly when the numbers of element are not stated
*/
[test.js, ln-449];

//Destructive operator object ES6: Accessibility
const obj1 = {
    name : "Toluwalase",
    age: NaN
}
const printName = obj1.name;
const printAge = obj1.age;
//Using destructive operator we can write it has
const{name, age} = obj1;
//Setting a variable to it, we can write
const {name: userName, age: userAge} = obj1;
[test.js, ln-460];

//Rest and spread print it element in the form of an array
//using rest in an array can only work when the specified elements holds the last element with it; it can't be omitted else it won't work
[test.js, ln-449];
//while destructing prints it like group of element separated by a comma 
[test.js, ln-460];

//Template Literals: where the use of "+" signs and apostrophe signs can be abolished
[test.js, ln-522];

//Object literals replaces the need to call both an object an its properties. it can be replaced in a function 
//by the use of({nameOfObjectProperties}) as the return statement i.e
const objectLiteral = (names, ages, lives) => ({names, ages, lives});
//instead of
const objectsLiteral = (names, ages, lives) => {
    return {
        names: names,
        ags: ages,
        lives: lives
    }
}
[test.js, ln-539];

//Class
class className {
    constructor(_parameter){
        this._parameter = _parameter;
    }
    method(){
        console.log(`The planet is ${this._parameter}`);
    }
}
//The prototype is the object or class we inherit characteristics from
let test = new prototype();
let test_ = Object.create(prototype);
//When the constructor is not called, this indicates that their is not parameter
class classNames {
    method(){
        console.log(`The planet is Jupiter`);
    }
}
//We can use the "new" keyword to create new objects. and also call the create object with it methods
const newObject = new className("Heaven");
newObject.method();        //calling the method
[test.js, ln-556,ln-563];

//getters and setters
[test.js, ln-565,ln-583];

//Creating a module with javascript:A script that can easily use import and export
<html>
    <body>
        <script type="module" src="index.js"></script>
    </body>
</html>

//Importing and exporting of code blocks: The function to be exported is to be written in an export box where it function can now be used in another files
[test.js, ln-585, ln-607];
//Fallback or default export are used when we only have one value to export from a file. The use of let;const;var is not allowed when calling the function

//javascript Promise 
//Conditions in javascript promise
//Handling resolve with then and passing the the "then" call back function
//Handling reject with catch and passing the the "catch" call back function
[test.js, ln-610, ln655];

//converting json prop to javascript
JSON.parse(Json_name);
//converting javascript to json prop
JSON.stringify(javascript_name);