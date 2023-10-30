import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cliente from './pages/Clientes';
import NovoCliente from "./pages/NovoCliente";
import CadastroUsuario from "./pages/CadastroUsuario";



export default function AppRoutes() {
    return (
        
          <BrowserRouter>
            <Routes>
              {/* Rotas para Cliente */}
                <Route path="/" exact element={<Login />} />
                <Route path="/clientes" element={<Cliente />} />
                <Route path="/cliente/novo/:clienteId" element={<NovoCliente />} />

                {/* Rotas para Usuario */}
                <Route path="/cadastro/novoUsuario" element ={<CadastroUsuario />} />
            </Routes>
          </BrowserRouter>
    );
}

