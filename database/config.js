require('dotenv').config();
const mongoose = require('mongoose');


// establece conexion77

const dbConnection = async () => {
    try{

        await mongoose.connect(process.env.DB_CNN,{
        useNewUrlParser: true,
       
        });
          console.log('DB Online')

      } catch(error){
         
          throw new error('error a la hora de iniciar la BD');
      } 
    
}
module.exports = {
    dbConnection
}

