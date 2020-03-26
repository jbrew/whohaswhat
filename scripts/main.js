
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

function getUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        return getUserName();
      } else {
    localStorage.setItem('name', myName);
    return myName;}
}

function setUserName(myName) {
    myHeading.textContent = 'Who Has What, ' + myName + '?';
  }

// MAIN SCRIPT AREA
const myHeading = document.querySelector('h1');

const path1 = 'images/deblasio.png';
const path2 = 'images/dog.png';
const imagePaths = [path1, path2];

var pathNumber = 0;

let mainImage = document.querySelector('img');

mainImage.onclick = function() {
    pathNumber = (pathNumber + 1) % imagePaths.length;
    newPath = imagePaths[pathNumber];
    mainImage.setAttribute('src', newPath);
}


myHeading.textContent = 'Hello world!';

a = Math.floor(Math.random() * 10);
b = Math.floor(Math.random() * 10);
c = multiply(a, b);

//alert(a.toString() + ' times ' + b.toString() + ' is ' + c.toString());

let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setUserName(getUserName());
  } else {
    let storedName = localStorage.getItem('name');
    setUserName(storedName);
}

myButton.onclick = function() {
  setUserName(getUserName());
}

//testAndSet();


// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }