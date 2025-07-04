// This script requirse arrays.js
//  which contains two arrays
//    globalMyPersonArray
//    globalMyObjectArray

// window.addEventListener("load", function(){

console.log('hello scripts.js');

// var getJSON = function(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'json';
//   xhr.onload = function () {
//     var status = xhr.status;
//     if (status === 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status, xhr.text);
//     }
//   };
//   xhr.send();
// };

function returnRandomElement (myNumberOfElements) {
  // return zero based element numbers

  var raw = Math.random();
  var timesElements = raw * myNumberOfElements;
  var final = Math.ceil(timesElements) - 1; // math values start at 1 but we want to start at zero

  return final;
}

function rollObject () {
  //
  // returns list of objects from array
  const myArray = window.globalMyObjectArray;

  let myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCard001').innerHTML = myArray[myElement];
  myArray.splice(myElement, 1);

  myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCard002').innerHTML = myArray[myElement];
  myArray.splice(myElement, 1);

  myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCard003').innerHTML = myArray[myElement];
  myArray.splice(myElement, 1);

  myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCard004').innerHTML = myArray[myElement];
  myArray.splice(myElement, 1);

  myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCard005').innerHTML = myArray[myElement];
  myArray.splice(myElement, 1);

  myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCard006').innerHTML = myArray[myElement];
  myArray.splice(myElement, 1);
} // end rollObject

function rollPerson () {
  // returns a new person card
  const myArray = window.globalMyPersonArray;

  const myElement = returnRandomElement(myArray.length);
  document.querySelector('#spnCardPerson001').innerHTML = myArray[myElement];
} // end rollObject

function rollTurnPriority () {
  //
  const myElement = returnRandomElement(1000);
  document.querySelector('#spnTurnPriority').value = myElement;
  //
} // end rollTurnPriority

// Add listeners to the buttons
const x = document.querySelector('#section-left-turn');
x.addEventListener('click', rollTurnPriority);

const y = document.querySelector('#section-left-object');
y.addEventListener('click', rollObject);

const z = document.querySelector('#section-left-person');
z.addEventListener('click', rollPerson);

// });
