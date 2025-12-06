import express from 'express'

const port=3000
const app= express()
app.get('/', (req, res)=>{
    res.send("Salut !!")
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
    
})