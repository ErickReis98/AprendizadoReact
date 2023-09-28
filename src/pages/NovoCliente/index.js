import React, {useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../Service/api'

import './styles.css';

import logoImage from '../../assets/logo.svg';


export default function NovoCliente() {
    
    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('accessToken');
    
    const navigate = useNavigate();

    async function criarNovoCliente(e){
        e.preventDefault();

        const data = {
            nome,
            cpf,
        }

        try {
            await api.post('cliente/cadastrar', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/clientes');
            alert("Cliente cadastrado com sucesso");

        } catch (error) {
            alert("Erro ao cadastrar cliente. Tente novamente")
        }
    }
    
    
    return (
        <div className="novo-cliente-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>Adicionar novo Cliente</h1>
                    <p>Adicione as informações do cliente e click em   'Adicionar'</p>
                    <Link className="back-link" to={"/clientes"}>
                        <FiArrowLeft size={16} color="251fc5" /> Voltar
                    </Link>
                </section>
                <form onSubmit={criarNovoCliente}>
                    <input 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome" 
                    type="text" />

                    <input 
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="CPF" 
                    type="text" />

                    <button className="button" type="submit">Adicionar</button>

                </form>
            </div>
        </div>
    )
}