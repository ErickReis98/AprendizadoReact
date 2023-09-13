import React from "react";
import { Link } from "react-router-dom"
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'
import logoImage from '../../assets/logo.svg'

export default function NovoCliente() {
    return (
        <div className="novo-cliente-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>Adicionar novo Cliente</h1>
                    <p>Adicione as informações do cliente e click em 'Adicionar'</p>
                    <Link className="back-link" to={"/clientes"}>
                        <FiArrowLeft size={16} color="251fc5" /> Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome" type="text" />
                    <input placeholder="CPF" type="text" />
                    <input placeholder="Pedidos" type="text" />

                    <button className="button" type="submit">Adicionar</button>

                </form>
            </div>
        </div>
    )
}