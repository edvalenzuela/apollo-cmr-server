import mongoose from 'mongoose';

const ProductosSchema = mongoose.Schema({
  nombre:{
    type:String,
    required: true,
    trim: true
  },
  existencia:{
    type: Number,
    require: true,
    trim: true
  },
  precio:{
    type: Number,
    require: true,
    trim: true
  },
  creado:{
    type: Date,
    default: Date.now()
  }
});

ProductosSchema.index({ nombre: 'text' })

export const Producto = mongoose.model('Producto', ProductosSchema);