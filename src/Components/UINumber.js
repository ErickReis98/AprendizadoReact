import React from "react";
const UINumber = ({ children }) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return (
        <div>
            {formatter.format(children)}
        </div>
    )
}
export default UINumber;