const mongoose = require('mongoose');

const connection = async () => {
    let mongodbOptions = {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        connectTimeoutMS: 10000,
        poolSize: 10,
        writeConcern: {
            j: true
        }
    };
    
    await mongoose.connect(process.env.URI, mongodbOptions);
    console.log('Database Connected...');
}

module.exports = connection;