import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2} from 'react-icons/fi'
import './styles.css';
import api from '../../Service/api'
import logoImage from '../../assets/logo.svg'

export default function Clientes(){
    const [clientes, setClientes] = useState([]);

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('accessToken');
    
    const navigate = useNavigate();

    async function logout(){
        localStorage.clear();
        navigate("/");
    }

    async function deleteCliente(id){
        try {
            await api.delete(`/cliente/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setClientes(clientes.filter(cliente => cliente.id !== id))
        } catch (err) {
            alert('Erro ao deletar. Tente novamente')
        }
    }

    useEffect(() =>{
        api.get('cliente', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response =>{
            setClientes(response.data)
        })
    })
    return (
    <div className = "cliente-container">
        <header>
            <img src = {logoImage} alt="Erudio"/>
            <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
            <Link className='button' to="/cliente/novo"> Adicionar novo cliente</Link>
            <button onClick={() => logout()} type='button'>
                <FiPower size={18} color="#251FC5" />
            </button>
        </header>

        <h1>Clientes Registrados</h1>
        <ul>
            {clientes.map(cliente =>(
                <li key={cliente.id}>
                <strong>Nome:</strong>
                <p>{cliente.nome}</p>
                <strong>CPF:</strong>
                <p>{cliente.cpf}</p>
                <strong>Pedidos:</strong>
                <p>{cliente.pedidos}</p>

                <button type='button'>
                    <FiEdit size={20} color='#251FC5'/>
                </button>

                <button onClick={() => deleteCliente(cliente.id)} type='button' >
                    <FiTrash2 size={20} color='#251FC5'/>
                </button>
            </li>
            ))}
            
        </ul>
    </div>
        )
}