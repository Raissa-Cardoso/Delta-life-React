//const porta=3003;
const express= require("express");
const mongoose=require("mongoose");

require("./models/Artigo");
const Artigo=mongoose.model("artigo");

const app=express();

app.use(express.json());

mongoose.connect('mongodb://localhost/my_database',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Conexão com mongoDB realizada com sucesso!")
}).catch((erro)=>{
    console.log("Erro: Conexão com mongoDB não foi realizada")
});

app.get('/', (req,res,next)=>{    
    Artigo.find({}).then((artigo)=>{
        return res.json(artigo)
    }).catch((erro)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum artigo encontrado!"
        })
    })
}); 

app.get('/artigo/:id', (req,res,next)=>{        
    Artigo.findOne({_id:req.params.id}).then((artigo)=>{
        return res.json(artigo)
    }).catch((erro)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum artigo encontrado!"
        })
    })    
}); 

app.post('/artigo', (req,res,next)=>{
    const artigo=Artigo.create(req.body,(err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"Error: Artigo não foi cadastrado com sucesso!"
        })
        return res.status(400).json({
            error:false,
            message:"Artigo cadastrado com sucesso!"
        })
    })
});

app.put('/artigo/:id', (req,res,next)=>{        
    const artigo=Artigo.updateOne({_id: req.params.id}, req.body, (err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"Error: Artigo não foi editado com sucesso!"
        })
        return res.status(400).json({
            error:false,
            message:"Artigo editado com sucesso!"
        })
    }) 
});

app.delete('/artigo/:id', (req,res,next)=>{        
    const artigo=Artigo.deleteOne({_id: req.params.id}, req.body, (err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"Error: Artigo não foi apagado com sucesso!"
        })
        return res.status(400).json({
            error:false,
            message:"Artigo apagado com sucesso!"
        })
    }) 
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080")
})