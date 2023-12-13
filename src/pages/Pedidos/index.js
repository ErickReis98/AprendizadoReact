import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiSearch } from 'react-icons/fi'
import './styles.css';
import api from '../../Service/api'
import logoImage from '../../assets/logo.svg'
import { cpfMask } from '../../Components/cpfMask';
import UINumber from "../../Components/UINumber";
import MenuBar from '../../Components/MenuBar';

export default function Pedidos() {

    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('accessToken');

    const [numInput, setNumInput] = useState([]);
    const [pedidos, setPedidos] = useState([]);




    function carregarPedido(id) {

        document.getElementById('result').style.display = "block";

        try {
            api.get(`pedido/findId/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setPedidos(response.data)
            })
        } catch (error) {
            alert("Código invalido")
        }



    }








    async function logout() {
        localStorage.clear();
        navigate("/");
    }







    {/*
        
       jogar botão deslogar para a direita
       Estilizar menuBar 
       Adicionar pagina de adicionar pedido
        tirar o campo admin do cadastro usuario
       */}
    return (
        <div className="pedido-container">
            <header>
                <img src={logoImage} alt="Erudio" />
                <span>Bem vindo(a), &nbsp;<strong>{username.toUpperCase()}</strong>!</span>

                <button onClick={() => logout()} type='button' className='botao'>
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>
            <MenuBar />
            <section className='menu'>
                <div className='subMenu'>Buscar por código <br></br>
                    <input type='number'
                        onChange={e => setNumInput(e.target.value)}
                    />

                    <button className='buttonPedido' onClick={() => carregarPedido(numInput)}
                        type='button'>
                        <FiSearch size={18} color="#251FC5" /></button>
                </div>

                <div className='subMenu2'>Adicionar pedido</div>
            </section>

            <div id='result' className='result'>
                <section className='infos'>
                    <div className='infos1'>
                        <p><strong>Código: </strong>   
                            {pedidos.id}</p> 
                            <br/>

                        <p><strong>Nome do cliente: </strong>
                            {pedidos.nomeCliente}</p>
                        <br/>
                        <p><strong>CPF: </strong>
                            {pedidos.cpf}</p>
                    </div>
                    
                    <div className='infos2'>
                        <p><strong>Data do Pedido: </strong>
                            {pedidos.dataPedido}</p>
                        
                            <br/>
                        
                        <p><strong>Status: </strong>
                            {pedidos.status}</p>
                    </div>
                </section>

                <section className='infos3'>
                    <strong>Valor total:  </strong>&nbsp;
                        <UINumber>{(pedidos.total)}</UINumber>
                    
                </section>
                <div className='itens'>
                        <strong>Lista de itens:</strong><p/>
                    {pedidos.items?.map((item) => (

                        <ul>
                            <br/>
                            <strong> Nome do Produto: </strong><li>{item.nomeProduto}</li><p/>
                            <strong>Quantidade: </strong><li>{item.quantidade}</li><p/>
                            <strong>Preço unitário: </strong><li><UINumber>{item.precoUnitario}</UINumber></li>
                            <strong>Subtotal: </strong><li><UINumber>{(item.subTotal)}</UINumber></li>
                            <br/><br/>
                        </ul>
                    ))}
                    </div>














            </div>
        </div>
    )
}