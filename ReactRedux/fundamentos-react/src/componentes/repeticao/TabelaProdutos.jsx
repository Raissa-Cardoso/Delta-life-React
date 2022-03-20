import React from "react";
import produtos from "../../data/produtos.js"
import "./TabelaProdutos.css"

export default props =>{
    function getLinhas(){
        return produtos.map((produto,i)=>{
            return(
                <tr key={produtos.id} className={i%2===0?'Par':'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace(".",",")}</td>
                </tr>
            )
        })
    }
    {/*const produtoID=produtos.map(produto=>{
        return(
            <tr>{produto.id}</tr>
        )
    })
    const produtoNome=produtos.map(produto=>{
        return(
            <tr>{produto.nome}</tr>
        )
    })
    const produtoPreco=produtos.map(produto=>{
        return(
            <tr>{produto.preco.toFixed(2)}</tr>
        )
    })*/}
    return (
        <div className="TabelaProdutos">
            {/*<table border="1" style={{borderStyle:"solid", borderColor:"black"}}>*/}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
                
             {/*<td>
                    <tr><strong>ID</strong></tr>
                    <tr>{produtoID}</tr>
                </td>
                <td>
                    <tr><strong>Produto</strong></tr>
                    <tr>{produtoNome}</tr>
                </td>
                <td>
                    <tr><strong>Preço</strong></tr>
                    <tr>{produtoPreco}</tr>
                </td>*/}
            </table>
        </div>
    )
}