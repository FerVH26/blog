const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    genero: String,
    cantidad_t:{
        type: Number,
        required: true,
    } ,
    cantidad_e:{
        type: Number,
        required: true,
    } ,
    descripcion: {
        type: String,
        required: true
    },
    terminada: {
        type: Boolean,
        required: true
    },
    login_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
