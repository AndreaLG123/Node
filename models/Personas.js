const mongoose = require('mongoose');
const { Schema } = mongoose;

const personasSchema = new Schema({
	nombre: String,
	edad: Number,
	apellidos:{
		paterno: String,
		materno: String
	},
	profesion:{
		type: String,
		default: 'Desarrollador'
	}
});

mongoose.model('personas', personasSchema);