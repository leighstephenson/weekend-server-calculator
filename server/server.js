
const express = require( 'express' );
const app = express();
const port = 5001;

//enter code here, array for objects, app.get, app.post, etc.





//! allow req.body, needed for post request
app.use(express.json());





// serve back static files
app.use(express.static('server/public'));

app.listen(port, () => { //start the app
  console.log(`server running on: ${port}`);
}); // end 