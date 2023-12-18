// const connectDb = require('./db.js').connectDb
import connectDb  from './Patients/models/db.js';
import express from 'express'
const app = express();
import { router }  from './Patients/routes/patient.js';

connectDb("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2")
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use("/api", router)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})