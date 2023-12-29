// //Event Listeners

// //Click event
// const btn2 = document.querySelector('.btn2')
// btn2.addEventListener('click', () =>{
//     alert('I love javascript')
// })
// //onclick [line 22:index.html]

// //Mouseover event
// const container = document.querySelector('.container--one')
// const changeBackground = ()=> {
//     container.style.backgroundColor = 'green';
// }
// container.addEventListener('mouseover', changeBackground)

// //Visibilities event 
// const text = document.querySelector('.hidden--content')
// const box = document.querySelector('.boxes')

// function revealContent(){
//     //console.log(text.classList.contains('hidden--content--one'))
//     if(text.classList.contains('hidden--content--one')){
//         text.classList.remove('hidden--content--one')
//         box.classList.remove('box-design')
//     }else {
//         text.classList.add('hidden--content--one')
//         box.classList.add('box-design')
//     }
// }
// box.addEventListener('click', revealContent);

// //event propagation

// //event capturing -- target -- event bubbling
// window.addEventListener('click',()=> {
//     console.log('window')
// },{once:true})
// box.addEventListener('click', (e) =>{
//     console.log(e.target.style.color = 'red')
// },false)
// //false by default -- event bubbling
// //.preventDefault()
// //.stopPropagation

//Event Delegation
// const football = document.getElementById('football')
// football.addEventListener('click',(e) =>{
//     const footballTarget = e.target;
//     console.log('football is clicked')
// //matching the list in my html, since the list is going to be changed by js and manually in my html
//     if(footballTarget.matches('li')){
//         footballTarget.style.backgroundColor = 'whitesmoke';
//         footballTarget.style.color = 'black';
//     }
// })
// const basketball = document.getElementById('basketball')
// basketball.addEventListener('click',(e) =>{
//     const basketballTarget = e.target;
//     console.log('basketball is clicked')
//     if(basketballTarget.matches('li')){
//         basketballTarget.style.backgroundColor = 'whitesmoke';
//         basketballTarget.style.color = 'black';
//     }
// })

//Delegating the listener to the parent and applying it to the children

const sport = document.getElementById('sports');
sport.addEventListener('click', (e)=> {
    console.log(`${e.target.getAttribute('id')} was clicked`)
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'whitesmoke';
        target.style.color = 'black';
    }
})
//Adding new element to see if the event delegation is applied to future element
const li = document.createElement('li')
sport.appendChild(li)
li.textContent = 'Wrestling'
li.setAttribute('id','Wrestling')
