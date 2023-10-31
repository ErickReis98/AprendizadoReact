import React from "react";
import './styles.css';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'
import api from '../../Service/api'
import logoImage from '../../assets/logo.svg'

export default function CadastradoSucesso() {

    return (
        <div className="confirmado-container">
            <section className="confirmado">
                <h1>Usuario cadastrado com sucesso.</h1>
            </section>
            <section className="home">
                <Link to={"/"}>
                    <FiHome size={24} color="251fc5" /> Voltar para Home
                </Link>
            </section>
        </div>
    )

}