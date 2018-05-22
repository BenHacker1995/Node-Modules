const express = require( 'express' );
const app = express();
app.use( express.static( 'server/public' ));

const port = 5000;
app.listen( port, function(){
    console.log( `Listening on port ${port}` );
});

// . in front of required function non node_modules module
const addFunction = require( './addinator' );
const addArray = require( './array' );

let sum = addFunction( addArray );
console.log( 'The sum is', sum );
