
class Train {
    constructor(chairs, hasSeat, hasLight, water){
        this.chairs = chairs;
        this.hasSeat = hasSeat;
        this.hasLight = hasLight;
        this.water = water;
    }
    toggleLightOn() {
        console.log("Has seat?", !this.hasSeat);
    }
    lightStatus() {
        this.chairs = !this.chairs;
        console.log("Has chair?", this.chairs );
    }
}

class SuperFastTrain extends Train {
    constructor(toilet, airfresher, chairs, hasSeat, hasLight, passenger){
        super(chairs, hasSeat, hasLight)
        this.toilet = toilet;
        this.airfresher = airfresher;
        this.passenger = passenger;
    }
    lightStatus() {
        super.lightStatus();
        super.toggleLightOn();
        console.log("Is the light on?", this.chairs);
    }
}
//let train1 = new Train(false, true, false, "yes");
//let train3 = new Train(false, false, false, "Readily available");
//let superTrain = new SuperFastTrain("yes", "No",  false, false, true, 40);
//superTrain.toggleLightOn();
//superTrain.lightStatus();



class Dumbell {
    constructor(position, handles) {
        this.position = position;
        this.handles = handles;
    }
}
class Ballon {
    constructor(position, weight) {
        this.position = position;
        this.weight = weight;
    }
}
class Gym {
    constructor(hasBicycle, dumbellPos, ballonPos) {
        this.bicycleType = hasBicycle;
        this.dumbell = new Dumbell(dumbellPos, 8);
        this.ballon = new Ballon(ballonPos, 40);
    }
}
//const bellHolder = new Dumbell('where it is currently', "How many channels is their");
//const gymGuy = new Gym('Mercedes', "right corner", "Stationary");
//console.log(bellHolder.position);
//console.log(gymGuy.dumbell);
//console.log(gymGuy.bicycleType);



class DefaultParameters {
    constructor(string1 = "Toluwalase", string2 = "Magician Tales", birthYear = 2002, currentYear = 2023, magicianSecret = 0, bool = true) {
        this.string1 = string1;
        this.string2 = string2;
        this.birthYear =  birthYear;
        this.currentYear =currentYear;
        this.magicianSecret = magicianSecret;
        this.bool = bool;
    }
    ageOfPerson(){
        // In a conditional statement dealing with bool, bool = true ; is the same as bool 
        if(this.bool){
            console.log(this.string1, "is", this.currentYear - this.birthYear + this.magicianSecret, "years of age");
            let age = this.currentYear - this.birthYear + this.magicianSecret;
            console.log(this.string1 + " is " + age + " years of age");
        }else{
            console.log(this.string2 + ": It can happen only if you believe");
        }
    }
}
// let agePrinter = new DefaultParameters();
// agePrinter.ageOfPerson();
// let errorFinder = new DefaultParameters("Taiwo", "Kenny", 2007, 2023, 1, true);
// errorFinder.ageOfPerson();


class Animal {
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        this.energy = 0;
        console.log(this.energy);
        if(this.energy = 0){
            this.sleep();
        }
    }
    sleep(){

    }
    getColor(){
        console.log(this.color);
    }
}
class Cat extends Animal {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal {
    constructor(color, energy, sound, canFly){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound){
        super(color, energy, sound, canJumpHigh, canClimbTrees)
        this.houseCatSound = houseCatSound;
    }
    makeSound(){
        if(this.makeSound = true){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, tigerSound){
        this.tigerSound = tigerSound;
    }
}
class Parrot extends Bird {
    constructor(color, energy, sound, canFly, canTalk){
        this.canTalk = canTalk;
    }
    makeSound(){
        if(this.makeSound = true){

        }
        
    }
}



class Train {
    constructor(chairs, hasSeat, hasLight, water){
        this.chairs = chairs;
        this.hasSeat = hasSeat;
        this.hasLight = hasLight;
        this.water = water;
    }
    toggleLightOn() {
        console.log("Has seat?", !this.hasSeat);
    }
    lightStatus() {
      this.chairs = !this.chairs;
        console.log("Has chair?", this.chairs );
    }
}

class SuperFastTrain extends Train {
    constructor(toilet, airfresher, chairs, hasSeat, hasLight, passenger){
        super(chairs, hasSeat, hasLight)
        this.toilet = toilet;
        this.airfresher = airfresher;
        this.passenger = passenger;
    }
    lightStatus() {
        super.lightStatus();
        super.toggleLightOn();
        console.log("Is the light on?", this.chairs);
    }
}
//let train1 = new Train(false, true, false, "yes");
//let train3 = new Train(false, false, false, "Readily avaliable");
//let superTrain = new SuperFastTrain("yes", "No",  false, false, true, 40);
//superTrain.toggleLightOn();
//superTrain.lightStatus();



class Dumbell {
    constructor(position, handles) {
        this.position = position;
        this.handles = handles;
    }
}
class Ballon {
    constructor(position, weight) {
        this.position = position;
        this.weight = weight;
    }
}
class Gym {
    constructor(hasBicycle, dumbellPos, ballonPos) {
        this.bicycleType = hasBicycle;
        this.dumbell = new Dumbell(dumbellPos, 8);
        this.ballon = new Ballon(ballonPos, 40);
    }
}
//const bellHolder = new Dumbell('where it is currently', "How many channels is their");
//const gymGuy = new Gym('Mercedes', "right corner", "Stationary");
//console.log(bellHolder.position);
//console.log(gymGuy.dumbell);
//console.log(gymGuy.bicycleType);



class DefalutParameters {
    constructor(string1 = "Toluwalase", string2 = "Peter", birthYear = 2002, currentYear = 2023, magicianSecret = 1, bool = true) {
        this.string1 = string1;
        this.string2 = string2;
        this.birthYear =  birthYear;
        this.currentYear =currentYear;
        this.magicianSecret = magicianSecret;
        this.bool = bool;
    }
    ageOfperson(){
        // In a conditional statement dealing with bool, bool = true ; is the same as bool 
        if(this.bool){
            console.log(this.string1, "is", this.currentYear - this.birthYear + this.magicianSecret, "years of age");
            let age = this.currentYear - this.birthYear + this.magicianSecret;
            console.log(this.string1 + " is " + age + " years of age");
        }else{
            console.log(this.string2 + ": It can happen only if you believe");
        }
    }
}
// let agePrinter = new DefalutParameters();
// agePrinter.ageOfperson();
// let errorFinder = new DefalutParameters("Taiwo", "Kenny", 2007, 2023, 1, true);
// errorFinder.ageOfperson();


class Animal {
    constructor(color = "white", energy = 50){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
      if (this.energy > 0) {
        this.energy -= this.energy;
        console.log(this.energy);
        this.sleep();
      }
    }
    sleep(){
      if(this.energy === 0){
        console.log("The Animal is sleeping");
      }else {
        console.log("active the method 'isActive' ")
      }
    }
    getColor(handle){
      this.color = handle
        console.log("Hey niptweet, i am now " + this.color + " in color");
    }
  }
class Cat extends Animal {
    constructor(color = "black", energy = 100, sound = "meow meow", canJumpHigh = true, canClimbTrees = true){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal {
    constructor(color = blue, energy = 150, sound = "chip chip", canFly = true){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(color = "Beautiful looking bird 'multicolor'", energy = 80, canJumpHigh = false, canClimbTrees = false, houseCatSound = "meow"){
        super(color, energy, canJumpHigh, canClimbTrees)
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(color = "stripes", energy = 500, canJumpHigh = true, canClimbTrees = false, tigerSound= "roarrr"){
      super(color, energy, canJumpHigh, canClimbTrees)
        this.tigerSound = tigerSound;
    }
}
class Parrot extends Bird {
    constructor(color = "multiple color", energy = 50, sound = "imitating you", canFly = true, canTalk = true){
      super(color, energy, sound, canFly)
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option){
          console.log(this.sound)
        }else {
          console.log("Damandju")
        }
        if(this.canTalk){
          console.log("I can talk");
        }
    }
}
let jungleKing = new Animal();
jungleKing.isActive();
jungleKing.getColor("dogerblue");
let talkingParrot = new Parrot(true);
talkingParrot.makeSound(true);


class Music {
    constructor(genre, hiphop, reggae, bass, solemn){
        this.genre = genre;
        this.hiphop = hiphop;
        this.bass = bass;
        this.reggae = reggae;
        this.solemn = solemn;
    }
    musicJourney(){
        const track = "5th";
        const title = `Story for the ${track} weak bitch\n\t I despise mortals: Flee`;
        console.log(title);
    }
}
class Artist extends Music {
    constructor(genre,solemn){
        super(genre, solemn);
        this.genre = genre;
        this.solemn = solemn;
    }
    musicJourney(){
        super.musicJourney();
        return "The building of the next legend " + this.genre + " added with a lot of trouble " + this.solemn;
    }
}

const Sailor = new Music("hiphop", true, false, true, false);
const David = new Artist("rubbishSong", "yes");
console.log(David.musicJourney());


