//console.log('Testing JS');

//X Create a user interface where the user can input two values (2 input elements) 
// and then select type of mathematical operation. When the submit (`=` button) is 
// clicked, capture this input, bundle it up in an object, and send this object to 
// the server via a POST. 
// There should also be a 'C' button that will clear the user input fields.


//! Global Variables here 

let answer = '';
let operation = ''; //Sets initial value, to be changed w/ onClick events



//! GET request 

function getNumbers(){
        console.log('In getNumbers function');
    axios.get('/calculations').then((response)=> { 
        console.log('response in getNumbers', response);
    let numbersToAdd = response.data;
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML=''; //resets content div to prevent displaying duplicates
    for (let number of numbersToAdd) {
        contentDiv.innerHTML += `

        <h2> ${number.answer} </h2>

        <p> ${number.firstNumber} ${number.operation} ${number.secondNumber} = ${number.answer} </p>
        
        `;
    }
}).catch((error) => {
    console.log(error);
    alert('Something is wrong here...');
});

}; //ends getNumbers function

getNumbers(); //calls function to append the DOM


//! Submit/Equals function

function submit(event){ //start
    event.preventDefault(); //stops default refresh


            console.log('In submit function')


    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);

            console.log('Inputs:', firstNumber,'and', secondNumber);

    let numbersToAdd = { //starts new object
        firstNumber: firstNumber,
        operation: operation,
        secondNumber: secondNumber,
        answer: answer,
    }; //ends object

    axios.post('/calculations', numbersToAdd).then((response)=> {
            console.log('response:', response);
        getNumbers();
    }).catch((error) => {
            console.log(error);
            alert('Something is wrong here...');
    });


}; //end submit function

//! Choosing the operation
//On click, user will choose which operation to use in their calculation.
//Need that value to carry over to the math function.

function addButton(event){
    operation = '+';
    console.log('Chosen operation:', operation)
};

function subtractButton(event){
    operation = '-';
    console.log('Chosen operation:', operation)

};

function divideButton(event){
    operation = '/';
    console.log('Chosen operation:', operation)

};

function multiplyButton(event){
    operation = '*';
    console.log('Chosen operation:', operation)

}; // End operation functions



//!Clear calculator
//TODO not working yet
function clearDiv(event){ //start 
console.log('In clear function'); 

let firstNumber = document.querySelector('#firstNumber'); 
let secondNumber = document.querySelector('#secondNumber'); 

firstNumber.value = '';
secondNumber.value = '';

}; //end clear function

