import React from "react";

const MenuBar = () => (
    <div className="menuBar-container">
        <div className="botaoMenu">
            <a href="./Clientes">Clientes</a>
        </div>
            
        <div className="botaoMenu">
            <a href="./Produtos">Produtos</a>
        </div>
            
        <div className="botaoMenu">
            <a href="./Pedidos">Pedidos</a>
        </div>
    </div>
);

export default MenuBar;