const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        path = require('path');

app.use(express.static(path.join( __dirname , '/client/dist/client' )));
app.use(bodyParser.json());
 
mongoose.connect('mongodb://localhost/RestfulTaskAPI');
mongoose.Promise = global.Promise;


require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})