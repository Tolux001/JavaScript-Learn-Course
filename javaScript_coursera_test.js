function testBracketsDynamicAccess(){
  var dynamicKey;
  if(Math.random() <= 0.3) {
    dynamicKey = "speed";
   }else if (Math.random() > 0.3 && Math.random() < 0.5){
    dynamicKey = "color";
   }else if(Math.random() >= 0.5) {
    dynamicKey = "type";
   }else {
    dynamicKey = "shape";
   }
    var drone = {
      speed: 15,
      color: "orange",
      shape: "triangular",
      size: 60,
      type:"porch",
    }
    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();


var arrList = ["today", "tomorrow", "next"]
var favCar = {
  "today" : 100,
  "tomorrow" : 200,
  "next" : 400
}
for(var i = 0;i < arrList.length; i++){
  console.log(favCar[arrList[i]])
}


function toluIsTesting(a, b, c, d, e, f) {
  var arrList = [];
  arrList.push(a);
  arrList.push(b);
  arrList.push(c);
  arrList.push(d);
  arrList.push(e);
  arrList.push(f);
    return arrList
}
toluIsTesting("today", "yesterday", "tomorrow", "jdjsjssh", "tomorrow3","jdiwbb");


try {
throw new ReferenceError
} catch(error) {
console.log(error);
console.log("My code still runs");
}
console.log('fuustnndhs')


function addTwoNums(a,b) {
  try {
    if (typeof(a) == "string"){
      throw 'the first argument is not a number'
    } else if(typeof(b) == "string") {
      throw new ReferenceError('the second argument is not a number')
    } else {
       console.log(a + b);
    }
  }catch(err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, 5);
console.log("It still works");
  
  
function getDistance(mp, h) {
  return mp * h
}
var speed = 20;
var time = 3;
var distance = getDistance(speed, time);
console.log(distance);


function updateObject(animal) {
  animal.legs = 4;
}
let human = {
  legs : 3,
}
updateObject(human);


function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};
myFunc(mycar)


let myVehicle = {
  tryes : 4,
  color : "white",
  turboOn : function() {
    this.color = "black"
  }
}
console.log(myVehicle.color);
myVehicle.turboOn();
console.log(myVehicle.color);


// classes
class Rental {
  constructor(chair, table, canopy, drum, cooker){
    this.chair = chair;
    this.table = table;
    this.canopy = canopy;
    this.drum = drum;
    this.cooker = cooker;
  }
  customerForNaming() {
    console.log("Give me according to quoted size for Naning");
  }
  customerForWedding() {
    console.log("I want to rent!, my wedding is some days to go!!");
  }
}
const rentForWedding = new Rental("white", 4, "half plot", 12, "double burner");
rentForWedding.customerForWedding();
const rentForNaming = new Rental("broad handle", 10, "festival", 2, "single burner");
rentForNaming.chair;
rentForNaming.customerForNaming();


class Programming {
  JavaScript(){
    console.log('Building!');
  }
}
class backend extends Programming {
  JavaScript(){
    console.log('Building! at the backend');
  }
}
class frontend extends Programming {
  JavaScript(){
    super.JavaScript()
    console.log("Building! At the frontend");
  }
}
const backend1 = new backend();
const frontend1 = new frontend();
backend1.JavaScript();
frontend1.JavaScript();


const list = [1, 2, 3, [4].push(5), 6]
console.log(list);

//how to feed function parameters to an array
function toluIsTesting(a, b, c, d, e, f) {
  var arrList = [];
  arrList.push(a);
  arrList.push(b);
  arrList.push(c);
  arrList.push(d);
  arrList.push(e);
  arrList.push(f);
    return arrList
}
console.log(toluIsTesting("today", "yesterday", "tomorrow", "theNextDay", "tomorrow3","youComing"));
function toluIsTestings(...arr) {
  let arrList = [];
  arrList.push(...arr)
    return arrList
}
console.log(toluIsTesting("today", "yesterday", "tomorrow", "theNextDay", "tomorrow3","tomorrowAfternoon"));


