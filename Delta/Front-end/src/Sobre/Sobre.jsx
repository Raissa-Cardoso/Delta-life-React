import React from "react";
import './Sobre.css';

const deltalife=require('../assets/deltalife.png')

export default function Sobre(props){    
    return (
        <main className="sobreCompleto">
            <div className="historia">
                <h1>Nossa História</h1> 
                <div className="historia1">
                <h2>
                A Delta Life está localizada na Rua Salviano José da Silva, 445 no eixo Rio – São Paulo no pólo 
                industrial de São José dos Campos/SP. Surgiu com o objetivo de fornecer soluções inteligentes para 
                área da saúde, utilizando alta tecnologia no desenvolvimento de novos equipamentos médicos.</h2>
                </div>
                <div className="historia2">
                <h2>A empresa surgiu em 2007, após quatro anos de pesquisa na área de equipamentos médico-hospitalares,
                buscando atender a necessidade de um equipamento para auxílio à infusão intravenosa de medicamentos, 
                terapia esta que requer alto nível de precisão. Neste contexto idealizou-se o Mediflux, equipamento que
                expressa à correta vazão de soro, em mililitros por hora ou gotas por minuto, em equipo macro e micro
                gotas, com extrema precisão, auxiliando os profissionais da saúde na preparação da terapia intravenosa,
                proporcionando-lhes maior segurança e confiabilidade no tratamento do paciente.</h2>
                </div>                
                
            </div>        
            <div className="wrapper">
                <div className="box1">
                    <h1>Política da Qualidade</h1>
                    <h2>A Delta Life fabricante de equipamentos médicos hospitalares se compromete com os
                        requisitos a ela aplicáveis. Busca atender a satisfação dos clientes com produtos de 
                        alta tecnologia nacional e com um atendimento diferenciado.</h2>
                    <h2>Capacita e desenvolve os colaboradores para alcançar os objetivos da empresa.
                         Com o apoio e comprometimento de toda a organização, visa à melhoria contínua e a 
                         eficácia do Sistema de Gestão da Qualidade.</h2>
                </div>
                <div className="box2">
                    <h1>Missão</h1>
                    <h2>Fornecer soluções inteligentes e inovadoras para a área da saúde, utilizando alta 
                        tecnologia no desenvolvimento de novos equipamentos médicos.</h2>
                </div>
                <div className="box3"><img src={deltalife}  alt="Delta Life"/></div>
               <div className="box4">
                    <h1>Valores</h1>
                        <ul>
                            <li>Satisfação do Cliente</li>
                            <li>Alta tecnologia</li>
                            <li>Excelência no atendimento</li>
                            <li>Ações de melhoria</li>
                            <li>Segurança e Qualidade</li>
                        </ul>                    
                </div>
                <div className="box5">
                    <h1>Visão</h1>
                    <h2>Desenvolver novas tecnologias para auxiliar médicos na busca pela excelência do 
                        bem-estar e qualidade de vida do ser humano. Ser reconhecida em âmbito nacional como 
                        uma das principais empresas em desenvolvimento de equipamentos médicos com alta 
                        tecnologia.</h2>                    
                </div>
            </div>
        </main>
    )
}