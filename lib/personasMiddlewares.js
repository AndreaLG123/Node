module.exports.datosLlenos = (req, res, next) =>{

	const { nombre, edad, apellidos  } = req.body;

	if(!nombre)
		return res.send('Falta agregar el nombre');

	if(!edad)
		return res.send('Falta agregar el campo edad');

	if(!apellidos)
		return res.send('Faltan los apellidos');

	if(typeof(apellidos) != 'object')
		return res.send({
			mensaje: 'Apellidos debe ser un objeto'
		});

	if(!apellidos.paterno)
		return res.send('Falta agregar el campo paterno');

	if(!apellidos.materno)
		return res.send('Falta agregar el campo materno');

	next();
};

module.exports.tipoDato = (req, res, next) =>{
	const { nombre, edad, apellidos, profesion } = req.body;
	let errores = [];

	if(typeof(nombre) != 'string')
		errores.push({
			mensaje : 'Nombre debe ser texto'
		});

	if(typeof(edad) != 'number')
		errores.push({
			mensaje: 'Edad debe ser numero'
		});

	if(profesion && typeof(profesion) != 'string')
		errores.push({
			mensaje: 'Profesion debe ser texto'
		});
	
	if(errores.length)
		return res.send(errores);

	next();
};