const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

//Config path to env file
dotenv.config({path:'backend/config/config.env'});

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})