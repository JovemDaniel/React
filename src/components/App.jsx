import React from "react";
import "./App.css";

import Primeiro from "./Primeiro";
import MaisUm from "./MaisUm";
import "./MaisUm.css";
import Repeticao from "./Repeticao";
import Condicional from "./Condicional";
import CondicionalComIf from "./CondicionalComIf";
import Pai from "../comunicacao/Direta/Pai";
import Super from "../comunicacao/Indireta/Super";
import Input from "./form/input";
import Contador from "./contador/Contador";
import Mega from "./mega/Mega";

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <MaisUm title="#1 - Exercicio" color="#C4B0FF">
                <Primeiro>Sed libera nos a malo</Primeiro>
            </MaisUm>

            <MaisUm title="#2 - Exercicio" color="#8696FE">
                Post tenebras lux
           </MaisUm>

            <MaisUm title="#3 - Exercicio" color="#4942E4">
                Maior dolor obscurat minorem
            </MaisUm>

            <MaisUm title="#4 - List Item" color="#11009E">
                <Repeticao></Repeticao>
            </MaisUm>

            <MaisUm title="#5 - Condicional VS1" color="#116D6E">
                <Condicional numero={11}></Condicional>
            </MaisUm>

            <MaisUm title="#6 - Condicional VS2" color="#CD1818">
                <CondicionalComIf numero={12}></CondicionalComIf>
            </MaisUm>

            <MaisUm title="#7 - Comunicao Direta" color="#CD1818">
                <Pai sobrenome="De Arrascaeta"></Pai>
            </MaisUm>

            <MaisUm title="#8 - Comunicao Indireta" color="#FF55BB">
                <Super></Super>
            </MaisUm>

            <MaisUm title="#9 - Input" color="#E57C23">
                <Input></Input>
            </MaisUm>

            <MaisUm title="#10 - Contador " color="#2CD3E1">
                <Contador passo={10} valor={100}></Contador>
            </MaisUm>

            <MaisUm title="#11 - Mega " color="#FFE569">
                <Mega qtdeNumero={8}></Mega>
            </MaisUm>
            </div> 
    </div>
);
