//create the body
const body = document.body;

//write text to the body
//body.append("Hello world");

//create an element (div) to the body 
const create = document.createElement("div");

//write a text into the div
create.innerText = "Hello world";
create.textContent ="Bye world";

//place the div using append to the body
body.appendChild(create);

//to insert html element in strings. It is not good because users can write malicious code in your code
create.innerHTML = "<h1>The name of this bitch is bad</h1>";

//You can create the strong element using createElement instead of using innerhtml
const createStrong = document.createElement("h1");
createStrong.textContent = "Toluwalase ";
//place the strong using append to the div
create.appendChild(createStrong);


//to query an element from an html
const pickDiv = document.querySelector("div.section");
const pickFisrtId = document.querySelector("#main1");
const pickSecondId = document.querySelector("#main2");

//to remove an element from an html doc
pickSecondId.remove();

//It can be added back by using append, since append calls an element to another or to the body. Since the main2 id is in the div-section, all we have to do is to append it back to it.
pickDiv.append(pickSecondId);

//get and set attributes
console.log(pickFisrtId.getAttribute("id"));
console.log(pickSecondId.id);

pickFisrtId.setAttribute('id', 'gdhsh');

//dataset
console.log(pickSecondId.dataset);

pickSecondId.style.color = "dodgerblue";
pickDiv.style.backgroundColor = "red";
pickFisrtId.style.display = "block";


