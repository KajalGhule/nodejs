var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var flowers = [
    { id: 1, name: "Rose", description: "Red rose symbolizing love and passion.", unitPrice: 10.5, quantity: 100, likes: 250 }, 
    { id: 2, name: "Lily", description: "White lily representing purity and elegance.", unitPrice: 8.75, quantity: 50, likes: 180 }, 
    { id: 3, name: "Tulip", description: "Colorful tulip for spring decoration.", unitPrice: 6.25, quantity: 75, likes: 90 }
];

var customers = [
    { id: 1, fastname: "Amit", lastname: "Sharma", email: "amit.sharma@example.com", contactNumber: "9876543210" }, 
    { id: 2, fastname: "Priya", lastname: "Patel", email: "priya.patel@example.com", contactNumber: "9123456789" }, 
    { id: 3, fastname: "Rahul", lastname: "Verma", email: "rahul.verma@example.com", contactNumber: "9988776655" }, 
    { id: 4, fastname: "Sneha", lastname: "Reddy", email: "sneha.reddy@example.com", contactNumber: "9090909090" }, 
    { id: 5, fastname: "Vikram", lastname: "Mehta", email: "vikram.mehta@example.com", contactNumber: "9001234567" }
];

app.get('/api/flowers', function(req, res) {
    res.send(flowers);
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

app.listen(3000);
console.log('Server is running on http://localhost:3000');  