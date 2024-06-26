import mongoose from 'mongoose';

const ClienteSchema = mongoose.Schema({
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
  empresa:{
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
  telefono:{
    type:String,
    trim: true
  },
  creado:{
    type: Date,
    default: Date.now()
  },
  vendedor:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario'
  }
});

export const Cliente = mongoose.model('Cliente', ClienteSchema);