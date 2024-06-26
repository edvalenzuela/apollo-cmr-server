import mongoose from 'mongoose';

const UsuarioSchema = mongoose.Schema({
  nombre:{
    type:String,
    required: true,
    trim: true
  },
  apellido:{
    type:String,
    required: true,
    trim: true
  },
  email:{
    type:String,
    required: true,
    trim: true,
    unique: true
  },
  password:{
    type:String,
    required: true,
    trim: true
  },
  creado:{
    type:Date,
    default: Date.now()
  }
});

export const Usuario = mongoose.model('Usuario', UsuarioSchema);