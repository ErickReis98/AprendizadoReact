import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cliente from './pages/Clientes';
import NovoCliente from "./pages/NovoCliente";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastradoSucesso from "./pages/CadastroSucesso";
import Produto from "./pages/Produto";
import NovoProduto from "./pages/NovoProduto";
import Pedidos from "./pages/Pedidos";

export default function AppRoutes() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
       
       {/* Rotas para Produto */}
        <Route path="/produtos" element={<Produto />} />
        <Route path="/produto/novo/:produtoId" element={<NovoProduto />} />

        {/* Rotas para Cliente */}

        <Route path="/clientes" element={<Cliente />} />
        <Route path="/cliente/novo/:clienteId" element={<NovoCliente />} />
        
        {/* Rotas para Pedidos */}    
        <Route path="/pedidos" element={<Pedidos />} />
        
        {/* Rotas para Usuario */}
        <Route path="/cadastro/novoUsuario" element={<CadastroUsuario />} />
        <Route path="/cadastro/cadastradoSucesso" element={<CadastradoSucesso />} />
      </Routes>
    </BrowserRouter>
  );
}

