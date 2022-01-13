const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    day:{
        type: String,
        required: true
    },
    beer:{
        type: String,
        required: true,
    },
    
    quantity:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('order', OrderSchema);

// dubbel:{
    //     type: String,
    //     required: true
    // },
    // neipa:{
    //     type: String,
    //     required: true
    // },
    // golden:{
    //     type: String,
    //     required: true
    // },
    // scotch:{
    //     type: String,
    //     required: true
    // },