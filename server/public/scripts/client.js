console.log('Testing JS');

//X Create a user interface where the user can input two values (2 input elements) 
// and then select type of mathematical operation. When the submit (`=` button) is 
// clicked, capture this input, bundle it up in an object, and send this object to 
// the server via a POST. 
// There should also be a 'C' button that will clear the user input fields.

function getNumbers(){
        console.log('In getNumbers function');
    axios.get('/calculations').then((response)=> {
        console.log('response in getNumbers', response);
    let numbersToAdd = response.data;
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML=''; //resets content div to prevent displaying duplicates
    for (let number of numbersToAdd) {
        contentDiv.innerHTML += `
        
        <p> firstNumber: ${number.firstNumber}, secondNumber: ${number.secondNumber} </p>
        
        `;
    }    //TODO ^ think I need to add an operation property and the answer. 
})


}; //ends getNumbers function

getNumbers(); //calls function to append the DOM

function submit(event){ //start
    event.preventDefault(); //stops default refresh
            console.log('In submit function')


    let firstNumber = Number.document.querySelector('#firstNumber').value;
    let secondNumber = Number.document.querySelector('#secondNumber').value;
            console.log('Inputs:', firstNumber, secondNumber);

    let numbersToAdd = { //starts new object
        firstNumber: firstNumber,
        secondNumber, secondNumber,
    }; //ends object

    axios.post('/calculations', numbersToAdd).then((response)=> {
            console.log('response:', response);
        getNumbers();
    }).catch((error) => {
            console.log(error);
            alert('Something is wrong here...');
    })
}; //end submit function




function clear(event){ //start 
    console.log('In clear function') 

    
}; //end clear function