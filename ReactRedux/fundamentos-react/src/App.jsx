import './App.css'
import React from "react";

import Mega from './componentes/mega/Mega';
import Contador from './componentes/contador/Contador';
import Input from './componentes/formulario/Input';
import IndiretaPai from './componentes/comunicacao/IndiretaPai';
import DiretaPai from './componentes/comunicacao/DiretaPai';
import UsuarioInfo from './componentes/condicional/UsuarioInfo';
import ParOuImpar from './componentes/condicional/ParOuImpar';
import TabelaProdutos from './componentes/repeticao/TabelaProdutos';
import ListaAlunos from './componentes/repeticao/ListaAlunos';
import Familia from './componentes/basicos/Familia';
import FamiliaMembro from './componentes/basicos/FamiliaMembro';
import Card from './componentes/layout/Card'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmentos'
import Aleatorio from "./componentes/basicos/Aleatorio";

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#13 - Mega" color="#B9006E">
                    <Mega qtde={6}></Mega>
                </Card>
                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input></Input>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#9 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#8 - Renderização condicional" color="#982395">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{nome:"Raissa"}}></UsuarioInfo>
                    <UsuarioInfo usuario={{email:"rc@gmail.com"}}></UsuarioInfo>
                </Card>
                <Card titulo="#7 - Tabela de Produtos" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#6 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#5 - Componente com Familia" color="#00C8F8">
                   <Familia sobrenome="Cardoso-Silvestre">
                        <FamiliaMembro nome="Raissa"></FamiliaMembro>
                        <FamiliaMembro nome="Sara"></FamiliaMembro>
                        <FamiliaMembro nome="Nina"></FamiliaMembro>
                    </Familia> 
                </Card>            
                <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio max={10} min={1}></Aleatorio>
                </Card>            
                <Card titulo="#3 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>            
                <Card titulo="#2 - Com Parametro" color="#E8B71A">
                    <ComParametro titulo="Situação do aluno" aluno="Raissa" nota={9.8}></ComParametro>
                </Card>            
                <Card titulo="#1 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>      
            </div>
        </div>
    )
}