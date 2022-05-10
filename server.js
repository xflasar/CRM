const express = require('express');
const mongoSanitize = require("express-mongo-sanitize");
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 3001);
app.use(mongoSanitize());

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@crm-data.hb9wy.mongodb.net/CRM-Data?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true});


// ModelSchema for Customer
const CustomerSchema = {
    id: ObjectID(),
    first_name: "string",
    last_name: "string",
    adressess: [],
    contact: [],
    orders: []

}
// ModelSchema for Address
const AddressSchema = {
    _id: ObjectID(),
    customer_id: ObjectID(),
    street: "string",
    city: "string",
    postcode: "string"

}
// ModelSchema for Contact
const ContactSchema = {
    _id: ObjectID(),
    customer_id: ObjectID(),
    tel: "int",
    email: "string"
}
// ModelSchema for Order
const OrderSchema = {
    _id: ObjectID(),
    customer_id: ObjectID(),
    products: [],
    status: "string",
    created: "date"

}
// ModelSchema for Product
const ProductSchema = {
    _id: ObjectID(),
    product_name: "string",
    product_count: "int",
    product_price: "int",
    product_description: "string"
}


// This shit basicly connects to database and inserts data
async function run() {
    try {
        await client.connect();

        const database = client.db("CRM");
        const customers = database.collection("customers");
        const customerId = ObjectID();
        const result = await customers.insertOne({
            _id: customerId,
            first_name: "Martin",
            last_name: "Flasar",
            adressess: [{
                _id: ObjectID(),
                customer_id: customerId,
                street: "Test on Test",
                city: "Test",
                postcode: "55436"
            }],
            contact: [{
                _id: ObjectID(),
                customer_id: customerId,
                tel: "553885333",
                email: "test@test.com"
            }],
            orders: [{
                _id: ObjectID(),
                customer_id: customerId,
                products: [{
                    _id: ObjectID(),
                    product_name: "Oreo",
                    product_count: 2,
                    product_price: 12,
                    product_description: "Oreo for your mind."
                }],
                status: "Pending",
                created: Date.now()
            }],
        });

        console.log(`Inserted document of Costumer with _id: ${result.insertedId}`);
    }finally {
        await client.close();
    }
}
//run().catch(console.dir);
// BS SHIT!!!


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get('/api/test', (req, res) => {
    res.send('<p>Server succesfully operational and api working!</p>');
    return;
})

app.get('/api/request',(req, res)=> {
    const param = req.query.q;
    if(!param){
        res.json({
            error: "Missing required parameter `q`"
        });
        return;
    }

})

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
})