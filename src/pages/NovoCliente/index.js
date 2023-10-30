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

    const {clienteId} = useParams();

    const token = localStorage.getItem('accessToken');

    
    const navigate = useNavigate();

    async function carregarCliente(){
        try {
            const response = await api.get(`cliente/findId/${clienteId}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setId(response.data.id);
            setNome(response.data.nome);
            setCpf(response.data.cpf);
        } catch (error) {
            alert("Erro ao inserir cliente.AA Confira os dados e tente novamente")
            navigate("/clientes");
        }
    }

    useEffect(() => {
        if (clienteId === '0') return;
        else carregarCliente();
    }, [clienteId]);

    async function salvarOuAlterar(e){
        e.preventDefault();

        const data = {
            nome,
            cpf,
        }

       
        try {
            if (clienteId === '0') {
                await api.post('cliente/cadastrar', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                data.id = id;
                await api.put(`cliente/${clienteId}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }

            navigate('/clientes');
        } catch (err) {
            alert('Erro ao inserir cliente. Confira os dados e tente novamente')
        }
    }
    
    
    return (
        <div className="novo-cliente-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>{clienteId === "0" ? "Adicionar novo" : "Alterar" } cliente</h1>
                    <p>Adicione as informações do cliente e clique em   '{clienteId === "0" ? "Adicionar" : "Alterar" }'</p>
                    <Link className="back-link" to={"/clientes"}>
                        <FiArrowLeft size={16} color="251fc5" /> Voltar
                    </Link>
                </section>
                <form onSubmit={salvarOuAlterar}>
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

                    <button className="button" type="submit">{clienteId === '0' ? 'Adicionar' : 'Alterar' }</button>

                </form>
            </div>
        </div>
    )
}