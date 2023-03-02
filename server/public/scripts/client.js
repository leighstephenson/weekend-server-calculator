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
        
        <p> firstNumber: ${number.firstNumber}, operation here: ${number.operation},   secondNumber: ${number.secondNumber} </p>
        
        `;
    } 
})


}; //ends getNumbers function

getNumbers(); //calls function to append the DOM


//! Submit/Equals function

function submit(event){ //start
    event.preventDefault(); //stops default refresh


            console.log('In submit function')


    let firstNumber = Number.document.querySelector('#firstNumber').value;
    let secondNumber = Number.document.querySelector('#secondNumber').value;
            console.log('Inputs:', firstNumber, secondNumber);

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
//TODO put these inside submit function maybe?
//On click, user will choose which operation to use in their calculation.
//Need that value to carry over to the math function.

function addButton(event){
    let operation = '+';
    console.log('Chosen operation:', operation)
};

function subtractButton(event){
    let operation = '-';
    console.log('Chosen operation:', operation)

};

function divideButton(event){
    let operation = '/';
    console.log('Chosen operation:', operation)

};

function multiplyButton(event){
    let operation = '*';
    console.log('Chosen operation:', operation)

}; // End operation functions



//!Clear calculator

function clear(event){ //start 
    console.log('In clear function') 
 let userInput = document.querySelector(".userInput").value; //sets var to = userInput class on HTML
userInput.reset(); //makes input form reset
    
}; //end clear function