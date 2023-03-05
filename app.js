const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs")
const port = 420;


// EXPRESS SPECIFIC STUFF
app.use('/static' , express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views' , path.join(__dirname , 'views'));

// ENDPOINTS
app.get('/' , (req , res )=>{
    const para = {}
    res.status(200).render('home.pug'  , para );
})
app.get('/contacts' , (req , res )=>{
    const para = {}
    res.status(200).render('contact.pug'  , para );
})
app.post('/contacts' , (req , res )=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This Data has been saved To DataBase")
    }).catch(()=>{
        res.status(404).send("Item was not saved to the Database")
    })
})

// START SERVER
app.listen( port , ()=>{
    console.log(`The application is running on port ${port} `);
});