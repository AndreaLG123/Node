const mongoose = require('mongoose');
const personasMiddlewares = require('../lib/personasMiddlewares');

const Persona = mongoose.model('personas');

module.exports = (app) => {

	//req = request (datos de post informacion)   es = response (respuesta la usuario) 

	//Obtener todos los registros
	app.get('/api/personas', async (req, res) => {
		try
		{
			const respuesta = await Persona.find();
			res.send(respuesta);
		}
		catch(error){
			res.send(error.message);
		}
	});

	//Guardar registros
	app.post(
		'/api/personas', 
		//Revisa si se cumple todo esto para hacer la accion que sigue.
		//Es  necesario el next() para que pueda realizar la siguiente instrucción.
		personasMiddlewares.datosLlenos,
		//Validación de tipos de datos
		personasMiddlewares.tipoDato,
		async (req, res) =>{
			/*try{
				const nuevaPersona = new Persona(req.body);
				const respuesta = await nuevaPersona.save();
				res.send(respuesta);
			}
			catch(error){
				res.send(error.message);
			}*/
			res.send('si pasa, aqui guarda');
		}
	);


	//Obtener un solo registro
	app.get('/api/personas/:id', async (req, res) => {
		try
		{
			const respuesta = await Persona.find({
				_id: req.params.id
			});
			res.send(respuesta);
		}
		catch(error){
			res.send(error.message);
		}
	});

	app.get('/api/personas/nombre/:nombre', async (req, res) => {
		try
		{
			const respuesta = await Persona.find({
				nombre: req.params.nombre
			});
			res.send(respuesta);
		}
		catch(error){
			res.send(error.message);
		}
	});

	//Editar
	app.put(
		'/api/personas/:id', 
		personasMiddlewares.datosLlenos,
		personasMiddlewares.tipoDato,
		async (req, res) =>{
			try{
				const respuesta = await Persona.findOneAndUpdate(
					{ _id: req.params.id },
					req.body,
					{ new: true }
				).exec(); //exec = para ejeutarse

				res.send(respuesta);
			}
			catch(error){
				res.send(error.message);
			}
		}
	);

	//Eliminar persona
	app.delete('/api/personas/:id', async (req, res) => {
		try
		{
			const respuesta = await Persona.deleteOne({
				_id: req.params.id
			});
			
			res.send(respuesta);
		}
		catch(error){
			res.send(error.message);
		}
	});

};



