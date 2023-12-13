import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import api from '../../Service/api'
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'
import './styles.css';
import UINumber from "../../Components/UINumber";
import logoImage from '../../assets/logo.svg';
import MenuBar from '../../Components/MenuBar';

export default function Produtos() {

    const token = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');

    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    async function logout() {
        localStorage.clear();
        navigate("/");
    }

    async function editarProduto(id) {
        try {
            navigate(`/produto/novo/${id}`);
        } catch (error) {
            alert('Erro ao editar. Tente novamente')
        }
    }
    async function deleteCliente(id) {
        try {
            await api.delete(`/produto/findId/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setProdutos(produtos.filter(produto => produto.id !== id))
        } catch (error) {
            alert('Erro ao deletar. Tente novamente')
        }
    }

    useEffect(() => {
        api.get('produto', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setProdutos(response.data)
        })
    })
    

    return (
        <div className="produtos-container">

            <header>
                <img src={logoImage} alt="Erudio" />
                <span>Bem vindo(a), &nbsp;<strong>{username.toUpperCase()}</strong>!</span>
                <Link className='button' to="/produto/novo/0"> Adicionar novo produto</Link>
                <button onClick={() => logout()} type='button'>
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <MenuBar />
            
            <section className="sub-menus">
                <h1>Produtos Registrados</h1>
                
                <table>
                    <tr>
                        <th>Nome do produto</th>
                        <th className="preco">Preço</th>
                        <th className="estoque">Estoque</th>
                    </tr>
                {produtos.map(produto => (                    
                    <tr key={produto.id}>
                            <td className="nome">{produto.nomeProduto}</td>
                            <td className="preco"><UINumber>{produto.preco}</UINumber></td>
                            <td className="estoque">{produto.estoque}</td>
                            <td className="botoes"> 
                                <button onClick={() => editarProduto(produto.id)} type='button'>
                                    <FiEdit size={20} color='#251FC5' />
                                </button>
                                
                                <button onClick={() => deleteCliente(produto.id)} type='button' >
                                    <FiTrash2 size={20} color='#251FC5' />
                                </button>
                            </td>
                    </tr>
                    ))}
                </table>
               
            </section>
        </div>
    )


}