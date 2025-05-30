var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// var creadentials = require('./data/credentials.json');
var customers = require('./data/customer.json');
var flowers = require('./data/flower.json');




app.get('/api/flowers', function(req, res) {
    res.send(flowers);
});

app.post('/api/login', function(req, res) {
    console.log(req.body);
    // res.send('login.html');
});

app.post('/api/register', function(req, res) {
    console.log(req.body);
    var newCustomer = {
        id: customers.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contactNumber: req.body.contactNumber
    };
    customers.push(newCustomer);
    res.send(newCustomer);
 });

app.get('/api/flowers/:id', function(req, res) {
    let flowerId = parseInt(req.params.id);
    let flower = flowers.find(f => f.id === flowerId);
    if (flower) {
        res.send(flower);
    } else {
        res.status(404).send({ message: 'Flower not found' });
    }
});

app.get('/api/customers', function(req, res) {
    res.send(customers);
});

app.get('/api/customer/:id', function(req, res) {
    let customerId = parseInt(req.params.id);
    let customer = customers.find(c => c.id === customerId);
    if (customer) {
        res.send(customer);
    } else {
        res.status(404).send({ message: 'Customer not found' });
    }
});

app.get('/', function(req, res) {   
    res.send('index.html');
});

app.listen(4000);
console.log('Server is running on http://localhost:4000');  