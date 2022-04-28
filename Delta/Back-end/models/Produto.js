const mongoose=require("mongoose");

const Produto=new mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    subtitulo:{
        type:String,
        required:true
    },
    isVet:{
        type:Boolean,
        required:false
    },
    focoCirurgico:{
        type:Boolean,
        required:false
    },
    focoProcedimento:{
        type:Boolean,
        required:false
    },
    descricao:{
        type:String,
        required:true
    },
    caracteristicas:{
        type:Array,
        required:true
    },
    imagem:{
        type:String,
        required:false
    }
},
{
    timestamps:true
});

mongoose.model("produto", Produto)


