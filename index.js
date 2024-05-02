import { ApolloServer } from 'apollo-server';
import { typeDefs } from './db/schema.js';
import { resolvers } from './db/resolvers.js';

import { conectarDB } from './config/db.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


//Conectar a la base de datos
conectarDB();

//Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:({req}) => {
    console.log(req.headers)
    const token = req.headers['authorization'] || '';
    if(token){
      try { 
        const usuario = jwt.verify(token.replace('Bearer ',''), process.env.SECRETA);
        return{
          usuario
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
});

//Arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`)
})
