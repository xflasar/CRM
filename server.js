const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);


const MongoClient = require('mongodb').MongoClient;
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@crm-data.hb9wy.mongodb.net/CRM-Data?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true});

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