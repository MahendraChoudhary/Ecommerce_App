const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://Mahendra:45934593@cluster0.n1tkwyk.mongodb.net/Ecommerce_App?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true}).then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase;