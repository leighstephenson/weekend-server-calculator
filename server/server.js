
const express = require( 'express' );
const app = express();
const port = 5001;

//TODO enter code here, array for objects, app.get, app.post, etc.



const historyArray = [ //empty array to store history
 {  firstNumber: 1, 
    operation: '+', 
    secondNumber: 2,
    //TODO may need to add the = and answer here? We'll get there.
 }

    
]; 


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
    let numbersToAdd = req.body
    historyArray.push(numbersToAdd);
    res.sendStatus(201); //success message
})




// serve back static files
app.use(express.static('server/public'));

app.listen(port, () => { //start the app
  console.log(`server running on: ${port}`);
}); // end 