//Imports and Packages needed to create/run the server
const express = require('express');
const cors = require('cors')

// Initalizing express
const app = express();


//Middle ware 
app.use(express.json());
app.use(cors());

const inventory = [
    'greeting card', 'table', 'chair', 'milk', 'boat', 'cookies', 'cheese', 'shampoo', 'conditioner', 'face wash']



// endpoints
app.get('/api/inventory', (req, res) => {
    if(req.query.item){
        const filteredItems = inventory.filter((invItem) => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    }else{
    res.status(200).send(inventory)
    }
})
// get endpoint with a param 
app.get('/api/inventory/:id', (req, res) => {
    const {id} = req.params
    res.status(200).send(inventory[id])
})







// line that runs the server for us on port 5050
app.listen(5050, () => console.log('jammin on 5050'))