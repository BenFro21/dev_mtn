let db = require('./db.json')
let id = 4



module.exports = {
    getHouses: (req,res) => {
        let houses = db;
        res.status(200).send(houses)
    },

    deleteHouse: (req, res) => {
        let id = req.params.id
        let index = db.findIndex((elem) =>  +elem.id === +id)
        db.splice(index, 1)
        res.status(200).send(db)
    },

    createHouse: (req,res) => {
        let {price, address, imageURL} = req.body;
        let newHouse= {
            price : price,
            adress: address,
            imageURL:imageURL
        }
        db.push({...newHouse, id: id})
        res.status(200).send(db)
        id++
    },

    updateHouse: (req, res) => {
       let {id} = req.params;
       let {type} = req.body
       let index = db.findIndex((el) => +el.id === +id) 
       if (db[index].price <= 10000 && type === 'minus') {
        db[index].price = 0
        res.status(200).send(db)
       }
       else if(type === 'plus'){
        db[index].price += 10000
        res.status(200).send(db)
       }
       else if(type === 'minus'){
        db[index].price -= 10000
        res.status(200).send(db)
       }
       else{
        res.sendStatus(400)
       }
    }
}