const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arrTest = "";
let numberNeeded = 8;
for(let i = 0; i < numberNeeded; i++){
  arrTest += test[randomArr()];
}

function randomArr(){
 console.log(Math.floor( Math.random() * test.length));
}
  console.log(arrTest);
export{randomArr};