import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2} from 'react-icons/fi'
import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Book(){
    return (
    <div className = "cliente-container">
        <header>
            <img src = {logoImage} alt="Erudio"/>
            <span>Welcome, <strong>Erick</strong>!</span>
            <Link className='button' to="cliente/new"> Adicionar novo cliente</Link>
            <button type='button'>
                <FiPower size={18} color="#251FC5" />
            </button>
        </header>

        <h1>Clientes Registrados</h1>
        <ul>
            <li>
                <strong>Nome:</strong>
                <p>Erick Reis</p>
                <strong>CPF:</strong>
                <p>11122233345</p>
                <strong>Pedidos:</strong>
                <p>Pedidos</p>

                <button type='button'>
                    <FiEdit size={20} color='#251FC5'/>
                </button>

                <button type='button'>
                    <FiTrash2 size={20} color='#251FC5'/>
                </button>
            </li>
            <li>
                <strong>Nome:</strong>
                <p>Erick Reis</p>
                <strong>CPF:</strong>
                <p>11122233345</p>
                <strong>Pedidos:</strong>
                <p>Pedidos</p>

                <button type='button'>
                    <FiEdit size={20} color='#251FC5'/>
                </button>

                <button type='button'>
                    <FiTrash2 size={20} color='#251FC5'/>
                </button>
            </li>
            <li>
                <strong>Nome:</strong>
                <p>Erick Reis</p>
                <strong>CPF:</strong>
                <p>11122233345</p>
                <strong>Pedidos:</strong>
                <p>Pedidos</p>

                <button type='button'>
                    <FiEdit size={20} color='#251FC5'/>
                </button>

                <button type='button'>
                    <FiTrash2 size={20} color='#251FC5'/>
                </button>
            </li>
            <li>
                <strong>Nome:</strong>
                <p>Erick Reis</p>
                <strong>CPF:</strong>
                <p>11122233345</p>
                <strong>Pedidos:</strong>
                <p>Pedidos</p>

                <button type='button'>
                    <FiEdit size={20} color='#251FC5'/>
                </button>

                <button type='button'>
                    <FiTrash2 size={20} color='#251FC5'/>
                </button>
            </li>
            <li>
                <strong>Nome:</strong>
                <p>Erick Reis</p>
                <strong>CPF:</strong>
                <p>11122233345</p>
                <strong>Pedidos:</strong>
                <p>Pedidos</p>

                <button type='button'>
                    <FiEdit size={20} color='#251FC5'/>
                </button>

                <button type='button'>
                    <FiTrash2 size={20} color='#251FC5'/>
                </button>
            </li>
        </ul>
    </div>
        )
}