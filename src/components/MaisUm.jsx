import React from "react";

export default (props) =>
    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || '#fff'
        }}>
            {props.title}
        </div>
      
    </div>