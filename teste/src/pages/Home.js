import React from "react";
import produtos from "../../src/produtos.js"

const Home = () => {
  const produto=produtos.map(produto=>{            
    return (
            <div>
              <h1>{produto.titulo} </h1>
              <h2>{produto.subtitulo}</h2>
              <h3>{produto.descricao}</h3>
            </div>
          )
    })  
  const caracteristica=produtos[0].caracteristicas.map(caracteristica=>{
    return (
            <li key={produtos[0].id}>
                  {caracteristica}
            </li>
    )
    })
  return(
    <div>
      {produto}
      <ul>
        {caracteristica}              
                    
      </ul>
    </div>

  )
}
export default Home;






    