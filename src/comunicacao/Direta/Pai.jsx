import React from "react";
import Filho from './Filho'

export default props =>
    <div>
       <Filho sobrenome="Barbosa">Gabigol</Filho>
       <Filho sobrenome={props.sobrenome}>Giorgian</Filho>
       <Filho sobrenome="Coringa">Gerson</Filho>
    </div>