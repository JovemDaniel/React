import React from "react";

import produtos from "../data/produtos";

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li>{prod.id} - {prod.nome} - R$ {prod.preco}</li>
        })
    }
    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}