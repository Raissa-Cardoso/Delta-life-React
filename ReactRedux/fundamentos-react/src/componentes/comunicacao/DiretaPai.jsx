import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props=>{
    return(
        <div>
            <DiretaFilho nome={"Raissa"} idade={35} nerd={true}></DiretaFilho>
            <DiretaFilho nome={"Sara"} idade={34} nerd={false}></DiretaFilho>
        </div>
    )
}