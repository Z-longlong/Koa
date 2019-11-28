const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const initDB = () => {

    mongoose.connect(
        'mongodb://localhost:27017/badjs', {
            useNewUrlParser: true
        }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

}

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/
initDB()
const GadgetSchema = new Schema({
    name: String,
    by_company: String,
    price: String,
});

module.exports = mongoose.model('Gadget', GadgetSchema);