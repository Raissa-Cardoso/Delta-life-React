const express= require("express");
const mongoose=require("mongoose");
const cors=require("cors");

require("./models/Artigo");
const Artigo=mongoose.model("artigo");
require("./models/Produto");
const Produto=mongoose.model("produto");

const app=express();

app.use(express.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*") //http://localhost:3000/
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    app.use(cors());
    next();
})

mongoose.connect('mongodb://localhost/my_database',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Conexão com mongoDB realizada com sucesso!")
}).catch((erro)=>{
    console.log("Erro: Conexão com mongoDB não foi realizada")
});

/*app.get('/', (req,res)=>{    
    Artigo.find({}).then((artigo)=>{
        return res.json(artigo)
    }).catch((erro)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum artigo encontrado!"
        })
    })
}); 

app.get('/artigo/:id', (req,res)=>{        
    Artigo.findOne({_id:req.params.id}).then((artigo)=>{
        return res.json(artigo)
    }).catch((erro)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum artigo encontrado!"
        })
    })    
}); 

app.post('/artigo', (req,res)=>{
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

app.put('/artigo/:id', (req,res)=>{        
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

app.delete('/artigo/:id', (req,res)=>{        
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
});*/



app.get('/', (req,res)=>{    
    Produto.find({}).then((artigo)=>{
        return res.json(artigo)
    }).catch((erro)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum produto encontrado!"
        })
    })
}); 

app.get('/produto/:id', (req,res)=>{        
    Produto.findOne({titulo:req.params.id}).then((produto)=>{
        return res.json(produto)
    }).catch((erro)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum produto encontrado!"
        })
    })    
}); 

app.post('/produto', (req,res)=>{
    const produto=Produto.create(req.body,(err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"Error: Produto não foi cadastrado com sucesso!"
        })
        return res.status(400).json({
            error:false,
            message:"Produto cadastrado com sucesso!"
        })
    })
});

app.put('/produto/:id', (req,res)=>{        
    const produto=Produto.updateOne({_id: req.params.id}, req.body, (err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"Error: Produto não foi editado com sucesso!"
        })
        return res.status(400).json({
            error:false,
            message:"Produto editado com sucesso!"
        })
    }) 
});

app.delete('/produto/:id', (req,res)=>{        
    const produto=Produto.deleteOne({_id: req.params.id}, req.body, (err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"Error: produto não foi apagado com sucesso!"
        })
        return res.status(400).json({
            error:false,
            message:"produto apagado com sucesso!"
        })
    }) 
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080")
})