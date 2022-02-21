const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config()
const PORT = process.env.PORT || 3000
const execute_app = express();
//conexion al puerto 3000
execute_app.listen(PORT, () => { console.log('listening the PORT', PORT) 
});
//primer request para acceder a http://localhost:3000
execute_app.get('', (req, res) => {
    res.send('Programacion III')
});
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Conect whit mongodb'))
    .catch((error) => console.error(error))


const userSchemaRoutes = require("./routes/user_routes")
//middleware
execute_app.use(express.json())
//crear usuario: http://localhost:3000/dashboard/user
//consultar usuarios: http://localhost:3000/dashboard/users
execute_app.use("/dashboard",userSchemaRoutes)