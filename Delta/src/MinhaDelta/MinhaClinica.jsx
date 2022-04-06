import React from "react";
import './MinhaClinica.css';
import {Link} from "react-router-dom";
import MenuMinhaDelta from "./MenuMinhaDelta";

export default function MinhaClinica(props){    
    return (
        <main className="minhaClinica">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta/></div> 
            <div className="divMinhaClinica">                
                <h1>Escolha qual pacote deseja adquirir</h1>
                <div className="opçoesClinica">
                    <div className="opçãoClinica">
                        <Link  to="/minhadelta/minhaclinicaveterinaria">
                            <input type="checkbox" id="opClinicaVet" name="opClinicaVet"/>
                        </Link>
                            <label for="opClinicaVet">Minha clínica veterinária</label>
                        
                    </div>
                    <div className="opçãoClinica"> 
                        <Link  to="/minhadelta/minhaclinicaodontologiaveterinaria">                  
                            <input type="checkbox" id="opOdontoVet" name="opOdontoVet"/>
                        </Link> 
                        <label for="opOdontoVet">Minha clínica de odontologia veterinária</label>
                    </div>
                    <div className="opçãoClinica">                    
                        <input type="checkbox" id="opCardioVet" name="opCardioVet"/>
                        <label for="opCardioVet">Minha clínica de cardiologia veterinária</label>
                    </div>
                    <div className="opçãoClinica">                    
                        <input type="checkbox" id="opCirurgiaVet" name="opCirurgiaVet"/>
                        <label for="opCirurgiaVet">Minha clínica de cirurgia veterinária</label>
                    </div>
                    <div className="opçãoClinica">
                        <Link  to="/minhadelta/minhaclinicahospitalar">                    
                            <input type="checkbox" id="opClinicaHosp" name="opClinicaHosp"/>
                        </Link>
                        <label for="opClinicaHosp">Minha clínica hospitalar</label>                        
                    </div>
                    <div className="opçãoClinica">                    
                        <input type="checkbox" id="opOdontoHumana" name="opOdontoHumana"/>
                        <label for="opOdontoHumana">Minha clínica de odontologia humana</label>
                    </div>                    
                </div>
                <div className="catalogos">
                    <div className="catalogoHospitalar">                        
                        <button className="botaoCatalogoHosp">Catálogo hospitalar humano</button>                        
                    </div>
                    <div className="catalogoVeterinario">
                        <button className="botaoCatalogoVet">Catálogo hospitalar veterinário</button>
                    </div>
                </div>

            </div>
        </main>
    )
}