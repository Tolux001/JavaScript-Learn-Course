let test = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '@', '#', '$', '&', '-', '+', '/', '*', '!', '?', '¥', '~', 'π'];
let arrTest = "";
let arrTest1 = "";
const passwordLength = 8;
for(let i = 0; i < passwordLength; i++){
  arrTest1 += test[randomRound()];
}
for(let i = 0; i < passwordLength; i++){
  arrTest += test[randomFloor()];
}
function randomRound(){
 return Math.round(Math.random() * test.length);
}
function randomFloor(){
  return Math.floor(Math.random() * test.length);
}
//console.log(randomFloor()); 
//console.log(randomRound());
console.log(arrTest);
//console.log(arrTest1);