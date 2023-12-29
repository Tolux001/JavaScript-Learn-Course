
//dom manipulation 
const createGrandParent = document.getElementById("grandparent-id");

//createGrandParent.style.backgroundColor = "black";

//createGrandParent.style.display = "none";
//createGrandParent.style.display = "block"

//using function to change color
function getColor(element, val) {
  element.style.backgroundColor = val;
}

// getColor(createGrandParent, "dodgerblue");


// //using query selector to pick id. Query selector is a selector a which can pick id with # and class with .

// const createGrandParentId = document.querySelector('#grandparent-id');
// const createGrandParentClass = document.querySelector('.grandparent');

// getColor(createGrandParentId, "dodgerblue");
// getColor(createGrandParentClass, "orange")



// //using querySelectorAll 
// const createParent = document.querySelectorAll('.parent');
// const createChild = document.querySelectorAll('.child');

// createParent.forEach(getColors);
// //createChild.forEach(getColors);

// function getColors(element) {
//   element.style.backgroundColor = "lightblue";
// }

// const grandParent = document.querySelector('.grandparent--');
// const parent = document.querySelector('.parent--');
// const child = document.querySelector('.child--');


// //event bubbling is the process of moving up the tree from a selected div to another.
//Using the div class the grandparent-- and it content for this example, we have the child inside the parent and inside the grandparent and inside the document. Whenever an element is clicked, it prints up the tree, i.e from itself to the container it is in.

// grandParent.addEventListener('click', () => {
//   console.log("grandparent printed to console");
// });
// parent.addEventListener('click', e => {
//   console.log("parent printed to console");
// });
// child.addEventListener('click', e => {
//   console.log("child printed to console");
// })

// const element = document.createElement('h4');

// function clickHandler(){
//   element.textContent = 1;
//   child.appendChild(element);
// }
// parent.addEventListener('click', clickHandler);

// const h1 = document.createElement('h2');
// const child1 = document.querySelector('.child--');
// const input = document.createElement('input')

// h1.textContent = 'What is your name';
// input.setAttribute('type','text');
// input.setAttribute('class','thread');

// child1.appendChild(h1);
// child1.appendChild(input);

// input.addEventListener('change', ()=>{
//   h1.textContent = input.value;
// })

const input1 = document.querySelector('.form--input');
const btn = document.querySelector('.btn');
const text1 = document.querySelector('span');

text1.textContent = '';

btn.addEventListener('click', ()=>{
  text1.textContent = input1.value;
})
input1.addEventListener('change', ()=>{
  text1.textContent = input1.value;
})
input1.addEventListener(mouseUp, ()=>{
    text1.textContent = input1.value;
  })