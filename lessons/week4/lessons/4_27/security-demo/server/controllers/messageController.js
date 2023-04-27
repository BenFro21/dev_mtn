const bcrypt = require("bcryptjs");
let chats = [
  //this is what it should look like
  // {
  //     message:['hakuna matata','hakuyta'],
  //     pin:1234
  // },
  // {
  //     message:['lets go','vamos'],
  //     pin:1235
  // }
];

module.exports = {
  createMessage: (req, res) => {
    // console.log(req.body);
    //destructuring the body
    const { pin, message } = req.body;
    //check if the pin already exists
    for (let i = 0; i < chats.length; i++) {
      //if it does then we can just append to the array
      //comparySync will return true if pin matches and false otherwise
      const existing = bcrypt.compareSync(pin,chats[i].pinHash)
        if(existing){
            chats[i].messages.push(message)
            //creating a new object to send to the front-end so we can remove the pinhash
            let messagesToReturn = {...chats[i]}
            delete messagesToReturn.pinHash
            res.status(200).send(messagesToReturn)
            return
        }
    }
    
    //if it does not we will create a new object and push it to the array

    //encrypt our pin before we send it to the database/array
    const salt = bcrypt.genSaltSync(10)
    // console.log(salt)
    //creating pinHash from pin using the hashSync method 
    const pinHash = bcrypt.hashSync(pin,salt)
    const newObj = {
      pinHash,
      messages: [message],
    };
    
    //pushing it to db/array
    chats.push(newObj);
    //creating a new object to send to the front-end so we can remove the pinhash
    let messagesToReturn = {...newObj}
    delete messagesToReturn.pinHash
    console.log(chats);
    res.status(200).send(messagesToReturn);
  },
};