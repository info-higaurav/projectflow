import app from "./app";
import connectToDb from './config/db/index'
const PORT = process.env.PORT || 5000

connectToDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch(()=>{
    console.log('Error connecting to database')
})