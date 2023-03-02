
const express = require( 'express' );
const app = express();
const port = 5001;
app.use(express.json());

//TODO enter code here, array for objects, app.get, app.post, etc.


//! Array for storing input and calculation history
const historyArray = [ //array to store history
 {  firstNumber: 1, 
    operation: '+', 
    secondNumber: 2,
    answer: 3,
 }

    
]; 

//! Do the math!!

let answer = 0; 

function doTheMath (firstNumber, operation, secondNumber){ //TODO are these the right inputs?
if (operation === '+'){
  let answer = firstNumber + secondNumber 
  console.log(firstNumber, operation, secondNumber,'=', answer);

}else if (operation === '-'){
  let answer = firstNumber - secondNumber
  console.log(firstNumber, operation, secondNumber,'=', answer);

}else if (operation === '/'){
  let answer = firstNumber / secondNumber
  console.log(firstNumber, operation, secondNumber,'=', answer);

}else if (operation === '*'){
  let answer = firstNumber * secondNumber
  console.log(firstNumber, operation, secondNumber,'=', answer);

  };
  
}; //End doTheMath function

//! allow req.body, needed for post request
app.use(express.json());


//!GET request
app.get('/calculations', (req, res) => {
    console.log('GET request made for /calculations')
    res.send(historyArray); 
});

//!POST request
app.post('/calculations', (req, res) => {
    console.log ('POST request made for /calculations');
    console.log ('req.body='. req.body) //requests data that was sent from client
    let numbersToAdd = req.body //TODO this might be in the wrong spot
    historyArray.push(numbersToAdd);
    doTheMath(firstNumber, operation, secondNumber) //TODO why are these showing as undeclared?
    res.sendStatus(201); //success message
})




// serve back static files
app.use(express.static('server/public'));

app.listen(port, () => { //start the app
  console.log(`server running on: ${port}`);
}); // end 