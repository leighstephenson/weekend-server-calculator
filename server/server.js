
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

function doTheMath (numbersToAdd){ 
  console.log(numbersToAdd);
if (numbersToAdd.operation === '+'){
   answer = numbersToAdd.firstNumber + numbersToAdd.secondNumber 
  //console.log(numbersToAdd.firstNumber, numbersToAdd.operation, numbersToAdd.secondNumber,'=', numbersToAdd.answer);

}else if (numbersToAdd.operation === '-'){
   answer = numbersToAdd.firstNumber - numbersToAdd.secondNumber
  //console.log(numbersToAddfirstNumber, numbersToAddoperation, numbersToAddsecondNumber,'=', answer);

}else if (numbersToAdd.operation === '/'){
   answer = numbersToAdd.firstNumber / numbersToAdd.secondNumber
  //console.log(firstNumber, operation, secondNumber,'=', answer);

}else if (numbersToAdd.operation === '*'){
   answer = numbersToAdd.firstNumber * numbersToAdd.secondNumber
  //console.log(firstNumber, operation, secondNumber,'=', answer);

  };
  let addNumbers = {
    firstNumber: numbersToAdd.firstNumber,
    operation: numbersToAdd.operation, 
    secondNumber: numbersToAdd.secondNumber,
    answer: answer,
  }
  console.log(addNumbers);
  historyArray.push(addNumbers);
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
    console.log ('req.body=', req.body.firstNumber) //requests data that was sent from client
    let numbersToAdd = req.body 
    doTheMath(req.body) 
    
    res.sendStatus(201); //success message
})




// serve back static files
app.use(express.static('server/public'));

app.listen(port, () => { //start the app
  console.log(`server running on: ${port}`);
}); // end 

