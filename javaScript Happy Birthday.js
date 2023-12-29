class BirthdayMessageGenerator {
  constructor(name) {
    this.name = name;
  }

  generateMessage() {
    return `Happy birthday, ${this.name}! 🎉🎂🥳`;
  }
}

const birthdayCelebrant = "Tolux001" //prompt("Please Enter Your Name: ");
const birthDayGreetings = new BirthdayMessageGenerator(birthdayCelebrant);
const birthdayMessage = birthDayGreetings.generateMessage();
console.log(birthdayMessage);