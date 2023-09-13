import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cliente from './pages/Clientes';
import NovoCliente from "./pages/NovoCliente";



export default function AppRoutes() {
    return (
        
          <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/clientes" element={<Cliente />} />
                <Route path="/cliente/novo" element={<NovoCliente />} />
            </Routes>
          </BrowserRouter>
    );
}
