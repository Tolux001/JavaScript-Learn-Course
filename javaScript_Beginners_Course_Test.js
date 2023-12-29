//Solved Challenges
const letter = "Toluwalase";
        lengthOfLetter = letter.length;
         console.log(lengthOfLetter);

         const windowSpace = "my name is \n \t Toluwalase Peter";
         console.log(windowSpace);

         const myName = "Toluwalase"
         let greeting = "hello greetings from " + myName + ", we welcome you to the club";
         console.log(greeting);

         var someAdjective = "worthwhile";
         var myStr = "learning to code is ";
         myStr += someAdjective;
         console.log(myStr);

         function wordBlank(adjective, noun, verb, adverb){
            let result = "";
            result += "The "+ adjective + " is very " + noun + " and it " + verb +" so "+ adverb;
            return result;
        }
console.log("\n" + wordBlank("dog", "big","ran","quickly"))


const myArr = [10, 20, 30, 40, 50];
const ourArr = [[10, 20, "tea",],[20, 30, "milk"],[50, "milo"],["Barack", "pack"],[true, false]];

var myArrData = myArr[0];
var ourArrData = ourArr[3][1];
console.log(myArrData);
console.log(ourArrData);

myArr[2] = 90;

myArr.push(60, 70);

myArr.push([20, 30]);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.shift();
console.log(myArr);

var removeValue = myArr.shift();
console.log(removeValue);

myArr.unshift("people");
console.log(myArr);

let myFunctionWithArgs= (c, d, e)=> {
    let bagPrice = 10;
    return bagPrice += d - e *  c;
}
console.log(myFunctionWithArgs(11, 100, 15));

function timesFives(a){
    return a * 5;
}
timesFives(4);

function nextInLine(arr, item){
    arr.push(item);
    item = arr.shift();
    return item;
}
var testArr = [1,2,3,4,5];
console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function statementAltered(isItTrue) {
    let word = "";
    if (isItTrue){
        word = "Very well done";
    }else {
        word = "Change your ways";
    }
    return word;
}
console.log("\n" + statementAltered(true));

function compareEqualToOperator(a, b){
    if (a === b){
        console.log("\nWell in fact that is true");
    }else {
        console.log("\nFalse bro");
    }
}
compareEqualToOperator(10,"10")

function textSize(num) {
    let value = "";
    if(num < 5){
        value = "Tiny";
    }else if(num < 10){
        value = "Small";
    }else if(num < 15){
        value = "Medium";
    }else if(num < 20){
        value = "Large";
    }else {
        value = "Huge"
    }
    return value;
}
console.log("\n" + textSize(7));

var golfNames = ['Hole-in-one!', 'Eagle', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
function golfScore(par, strokes) {
    let golfValue = "";
    if (strokes === 1) {
        golfValue = golfNames[0];
    }else if(strokes <= par - 2) {
        golfValue = golfNames[1];
    }else if(strokes === par - 1) {
        golfValue = golfNames[2];
    }else if(strokes === par) {
        golfValue = golfNames[3];
    }else if(strokes === par + 1) {
        golfValue = golfNames[4];
    }else if(strokes === par + 2) {
        golfValue = golfNames[5];
    }else {
        golfValue = golfNames[golfNames.length -1];
    }
    return golfValue;
}
console.log("\n" + golfScore(5, 3));

function caseInSwitch(val){
    let answer = "";
    switch(val){
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}
console.log("\n" + caseInSwitch(2));

//chainToSwitch
function chainToSwitch(val){
    let answerSwitch = "";
    switch(val){
        case "bob":
            answerSwitch = "Marley";
            break;
        case 42:
            answerSwitch = "The Answer";
            break;
        case 1:
            answerSwitch = "There is no #1";
            break;
        case 99:
            answerSwitch = "Missed me by this much!";
            break;
        case 7:
            answerSwitch = "Ate Nine";
            break;
    }
    return answerSwitch;
}
console.log("\n" + chainToSwitch(42));

//cc
var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case "Q":
        case "K":
        case "J":
        case "A":
            count--;
            break;
    }
    if(count > 0){
        return count + " Bet";
    }else if((count === 0)){
        return count + " Hold"
    }else if((count < 0)){
        return count + " Hold"
    }
}
cc(2); cc("K"); cc(7); cc(9); cc("A");
console.log("\n" + cc("K"));


let myDog = {
    "name": "Lucky",
    "age": 1,
    "friends": ["lots", "freeCodeCampers","frankly"]
}
myDog.name = "Precious";//updating
myDog.bark = "woof-woof"//adding
delete myDog.age; //deleting
console.log("\n" + myDog);

//phoneticLookUp(
function phoneticLookUp(val){
    let result = "";
    const lookUp = {
        "alpha": "Adams",
        "brave": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "Echo": "Easy",
        "foxtrot": "Frank",
    }
    result = lookUp[val];
    return result;
}
console.log("\n" + phoneticLookUp("charlie"));

// myMusic
let myMusic = [
    {
        "artist": "Billy",
        "title": "piano man",
        "formats": ["cd", "lp", "apc","pdp"],
    },
    {
        "artist": "Tolux",
        "title": "singing Angels",
        "formats": ["cp", "lpc", "app","pp"],
        "gold": false,
    }
]
let final = myMusic[1]["formats"][2];
console.log("\n" + final);
final =  myMusic[1].gold;
console.log("\n" + final);

//recordCollection
const recordCollection = {
    2548: {
        albumTitle: "slippery when wet",
        artist: "Bon",
        tracks: ["let it rock", "You Give Love a Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold",
    }
};
function updateRecords(_records, id, prop, value){
    if(value === undefined || value === ""){
        delete _records[id][prop];
    }else if (prop !== "tracks" && value !== ""){
        _records[id][prop] = value;
    }else if (prop === "tracks" && value !== ""){
        if(_records[id]["tracks"] === undefined){
            _records[id]["tracks"] = [];
        }
        _records[id]['tracks'].push(value);
    }
    return _records;
}
updateRecords(recordCollection, 2548, "artist", "")
updateRecords(recordCollection, 5439, "tracks","test");
updateRecords(recordCollection, 5439, "tracks","fuck");
updateRecords(recordCollection, 1245, "albumTitle");
console.log("\n" + updateRecords(recordCollection, 2468, "artist","ABBA"));

//to odd
let arrTest = [];
for(i = 9; i > 0; i -= 2){
    arrTest.push(i);
}
console.log(arrTest)

//To add and to print

var arrBed = [2, 3, 4, 5, 6];
let addArr = 0;
let printArr = "";

for(i = 0; i < arrBed.length; i++){
    addArr += arrBed[i];
    printArr += arrBed[i];
}
console.log("\n" + addArr);
console.log("\n" + printArr);

//profile look up
const contacts = [
    {
        "firstName": "Paul",
        "lastName": "Joshua",
        "number": "0543236543",
        "likes": ["Pizza", "Coding","Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic","swimming"]
    },
    {
        "firstName": "Sherlocks",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases","Violin"]
    },
    {
        "firstName": "Cartoon",
        "lastName": "Vos",
        'number': "unknown",
        "likes": ["JavaScript", "Gaming","Foxes"]
    }
];
function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(name === contacts[i]["firstName"]){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
     
}
console.log(lookUpProfile("Sherlocks", "likes"));
//console.log(Object.keys(contacts[0])[0]);

//random numbers
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(10, 24));

//Using ParseInt
function parseIntFunction(string){
   return parseInt(string);
}
console.log("\n" + parseIntFunction("50"));

//freezing object from been mutable
// let freezeArr = {
//     'Pi': 3.14275386,
// }
// Object.freeze(freezeArr);

//Recursive function test
function factorial(n){
    if(n <= 1){
        return 1;
    }else {
        return factorial(n - 1) * (n);
    }
}
console.log("\n" + factorial(5));
console.log("\n" + factorial(4));

/* How recursive works\
    factorial(5)
        factorial(5 -1) * 5 === factorial(4) * 5
            factorial(4 - 1) * 4 === factorial(3) * 4
                factorial(3 -1) * 3 === factorial(2) * 3
                    factorial(2 -1) * 2 === factorial(1) * 2 === 1 * 2    "Since in the block or if case, we have factorial(n <= 1) to be 1"
        1 * 2 === 2
            2 * 3 === 6
                6 * 4 === 24
                    24 * 5 === 120
*/

//Recursion test

//counting down
function countDown(n){
    if(n <= 0){
      return [];
    }else {
        const counter = countDown(n - 1);
        counter.unshift(n);
        return counter;
    }
  }
console.log(countDown(5));

//counting up
function countUp(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countUp(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
console.log(countUp(5));
console.log("\n");

//Range for recursion
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
  }else if (startNum === endNum){
    return [startNum];
  }else {
    const arrOfNumbers = rangeOfNumbers(startNum + 1,  endNum - 1);
    arrOfNumbers.unshift(startNum);
    arrOfNumbers.push(endNum);
    return arrOfNumbers;
  }
}
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 10));
console.log(rangeOfNumbers(5, 15));
console.log("\n");

//Default Parameter
const myFunc = (title = "boss") => "Sup my" + title;
console.log(myFunc('Gee'));
console.log(myFunc());
console.log("\n");

//Rest Parameter
const myFunction = (...parameter) => {
    let addition = 0;
    for(let i = 0; i < parameter.length; i++){
        addition += parameter[i];
    }
    return addition;
}
console.log(myFunction(2, 4, 5, 7, 7, 9));
console.log("\n");

//Destructive operator in objects
const obj1 = {
    name : "Toluwalase",
    age: NaN,
    tails: 4,
    higherDate: "May 2020",
    lowerDate: "May 2020"
}
const printName = obj1.name;
const printAge = obj1.age;
console.log(printName);console.log(printAge);
console.log("\n");

//Using destructive operator we can write it has
const{name, age} = obj1;
console.log(name);console.log(age);
console.log("\n");

//Assigning variables to it
const {name: userName, age: userAge} = obj1;
console.log(userName);console.log(userAge);
console.log("\n");

const {tails: numberOfTails, higherDate: printDateMax, lowerDate: printDateMin} = obj1;
console.log(numberOfTails);console.log(printDateMax);
console.log("\n");

//Rest and Destructive operator
const removeFirstTwo = (list)=>{
    const [a, b, ...arr] = list;
    return arr;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeFirstTwo(source));
console.log("\n");

//Destructive and object arguments as parameter
const stats = {
    max : 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode:23.87,
    min: -0.75,
    average: 35.85
}
const half = ({max , min}) => max + min;
const statsAddition = half(stats);
console.log(statsAddition);
console.log("\n");

//Template literals
const person = {
    name: "Toluwalase",
    age: "NAN",
};
const {name: usersName, age: usersAge} = person;
const greetings = `Hello, my name is ${usersName}!,
 I am ${usersAge} years old.`
console.log(greetings);
console.log("\n");

//Template literals
const result = {
    success: ["max-length", "no-amd", 'prefer-arrow-functions'],
    failure: ["no var", "var-on-top", "lineBreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
const makeList = (arr) => {
    const failureItem = [];
    for(let i = 0; i < arr.length; i++){
        failureItem.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItem;
}
const failureList = makeList(result.failure);
console.log(failureList);
console.log("\n");

//Object literals
const createPerson =  (name, age, gender) => ({name, age, gender});
console.log(createPerson("Toluwalase", "NAN", "Male"));
console.log("\n");

//Concise declarative functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear; 
    }
}
bicycle.setGear(3);
console.log(bicycle.gear);
console.log("\n");

//Class
class Vegetables {
    constructor(name){
        this.name = name;
    }
}
const fruit = new Vegetables('carrot');
console.log(fruit.name);
console.log("\n");

//Using getters and setters in class
class Thermostat {
    constructor(F){
        this._F = F;
    }
    get temperature(){
        return 5/9 * (this._F - 32);
    }
    set temperature(C){
        return this._F = C * 9.0 / 5 + 32;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
console.log("\n");

//Exporting 
const upperCaseString = (string) => string.toUpperCase();
const lowerCaseString = (string) => string.toLowerCase();
//export{upperCaseString, lowerCaseString};
/*The comment was used because their is no html file which contains the type="module" in the script tag Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.*/

//Importing 
//import {upperCaseString, lowerCaseString} from './math_function.js'
console.log(upperCaseString("hello"));
console.log(lowerCaseString('WORLD!'));

//Importing all element in a file
//import * as stringFunction from './math_function.js'
//console.log(stringFunction.upperCaseString("hello"));
//console.log(stringFunction.lowerCaseString('WORLD!'));

//Using default export
// export default function subtract(x, y){
//     return x - y;
// }

//importing default exported files
//import subtract from './math_function.js';

//Javascript Promise 
class Promise {
    constructor(resolve, reject){
        this.resolve = resolve;
        this.reject = reject;
    }
}
const makeServerRequest = new Promise((resolve, reject)=>{});


//Writing a conditional statement a to either resolve or reject
const makeServersRequest = new Promise((resolve, reject)=>{
    let responseFromServer;
    if(responseFromServer){
        resolve('We got the data');
    }else {
        reject('Data not received');
    }
});

//Handling a resolve promise with "then"
const makeServerRequests = new Promise((resolve, reject)=>{
    let responseFromServer;
    responseFromServer = true;
    makeServerRequest.then((result) => {
        console.log(result);
    });
    if(responseFromServer){
        resolve('We got the data');
    }else {
        reject('Data not received');
    }
});

//Handling a reject promise with "catch"
const makeServersRequests = new Promise((resolve, reject)=>{
    let responseFromServer;
    responseFromServer = false;
    makeServerRequest.catch((error) => {
        console.log(result);
    });
    if(responseFromServer){
        resolve('We got the data');
    }else {
        reject('Data not received');
    }
});
