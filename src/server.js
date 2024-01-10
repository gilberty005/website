const express = require('express'); 
const app = express(); 

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/pages/contactfolder/contact.js')
})

app.post('/', (req,res) =>{
    console.log(req.body); 
})

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})