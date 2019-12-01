const express = require('express')
var company=require('./routes/company')

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

app.get('/', (request, response) => {
    response.send('welcome')
})
app.use('/company',company);
app.listen(9898, '0.0.0.0', () => {
    console.log('server started  on port 9898')
})