const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    cityList: [String]
});


mongoose.model('users', userSchema);