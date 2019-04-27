const express = require('express'); /* Funcion: para obtener todo mas rapido y facil */
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/Personas');

//Ruta obtenida desde: https://cloud.mongodb.com/v2/5ca8cbed9ccf641f56e6fb2f#metrics/replicaSet/5ca8ccd69ccf6432364ab636/explorer/g6-node/personas/find
//mongoose.connect('mongodb+srv://aluna:3-Nov-95.@cluster0-wz40j.mongodb.net/g6-node?retryWrites=true');
//mongoose.connect('mongodb+srv://aluna:3-Nov-95.@cluster0-wz40j.mongodb.net/g6-node?retryWrites=true');

mongoose.connect(keys.MONGO_URL);

//Hace una refenrecia a una función por el require que es: require('./routes/personasRoutes');
require('./routes/personasRoutes')(app);


app.listen(process.env.PORT || 5000); // Puerto: 5000 -> back, 3000 -> front 

