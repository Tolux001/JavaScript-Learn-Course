// //=======Selecting Element========

// // const heading = document.getElementById('main-heading');
// // console.log(heading)
// // const list = document.getElementsByClassName('list-items')
// // console.log(list)
// // const listItem = document.getElementsByTagName('li')
// // console.log(listItem)
// // const container = document.querySelector('div.container')
// // console.log(container)
// // const multiContainer = document.querySelectorAll('div.container')
// // console.log(container)

// //========Styling Elements =============

// // const title = document.querySelector('#main-heading');
// // title.style.color = "red";

// const listItems = document.querySelectorAll('.list-items')
// // for(i = 0; i < listItems.length; i++){
// //     listItems[i].style.fontSize = '2rem';
// // }
// // listItems.forEach((key) => {
// //     key.style.fontSize = '2em';
// // })

// //===============Creating items && Append ===========
// const li = document.createElement('li');

// const ul = document.querySelector('ul');

// ul.appendChild(li);

// li.textContent = 'men and women'


// //==========Attribute============
// //Set And Get Attribute
// li.setAttribute('class','list-items')

// //Remove Attribute
// li.removeAttribute('class')

// //Get attribute
// li.getAttribute('class')

// //Classes

// li.classList.add('list-items');

// //li.classList.remove()

// const a = li.classList.contains("list-items")
// console.log(a)


// //removing element
// li.remove();

// //Traversing the dom

// //Parent Node Traversal
// const ul = document.querySelector('ul')

// console.log(ul.parentElement);
// console.log(ul.parentNode);

// //Grandparent node traversal
// //console.log(ul.parentElement.parentElement)
// //console.log(ul.parentNode.parentNode);

// const html = document.documentElement;
// console.log(html.parentElement)
// console.log(html.parentNode)

// //Child Node
// const ul = document.querySelector('ul')
// console.log(ul.childNodes)
// console.log(ul.childElementCount)
// console.log(ul.children)

// //First and CLast Child: Be careful when using first child to select because it select every element in the parent including nodes and indentation
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// //Instead we can use
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// ul.firstElementChild.style.backgroundColor = 'red';

// //Since they are multiply list items, we can select element it using childNode[i]
// //They nodes are selected with odd numbers
// ul.childNodes[3].style.color = 'dodgerblue'
// ul.childNodes[7].style.fontSize = '20px'

// //sibling node
// const ul = document.querySelector('ul')
// console.log(ul.previousElementSibling)