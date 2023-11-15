import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import logoImage from '../../assets/logo.svg';

import api from '../../Service/api'
import CurrencyInput from '../../Components/CurrencyInput';



export default function NovoProduto () {

    const [id, setId] = useState(null);
    const [nomeProduto, setNomeProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');

    const { produtoId } = useParams();

    const token = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    async function carregarProduto() {
        try {
            const response = await api.get(`produto/findId/${produtoId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setId(response.data.id);
            setNomeProduto(response.data.nomeProduto);
            setPreco(response.data.preco);
            setEstoque(response.data.estoque);

        } catch (error) {
            alert("Erro ao inserir produto. Confira os dados e tente novamente")
            navigate("/produtos");
        }
    }

    useEffect(() => {
        if (produtoId === '0') return;
        else carregarProduto();
    }, [produtoId]);

    useEffect(() => {
        var input = document.querySelector("#estoqueInput");
        input.addEventListener("keypress", function(e) {
            if(!checkChar(e)) {
            e.preventDefault();
        }
        });
        function checkChar(e) {
            var char = String.fromCharCode(e.keyCode);
        
        console.log(char);
            var pattern = '[0-9]';
            if (char.match(pattern)) {
            return true;
        }
        }
    });

    useEffect(() => {
        var inputNome = document.querySelector("#nomeProdutoInput");
        inputNome.addEventListener("keypress", function(e) {
            if(!checkChar(e)) {
            e.preventDefault();
        }
        });
        function checkChar(e) {
            var char = String.fromCharCode(e.keyCode);
        
        console.log(char);
            var pattern = '[a-zA-Z]';
            if (char.match(pattern)) {
            return true;
        }
        }
    });

    async function salvarOuAlterar(e) {
        e.preventDefault();

        const data = {
            nomeProduto,
            preco,
            estoque,
        }


        try {
            if (produtoId === '0') {
                await api.post('produto/cadastrar', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                data.id = id;
                await api.put(`produto/${produtoId}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }

            navigate('/produtos');
        } catch (err) {
            alert('Erro ao inserir produto. Confira os dados e tente novamente')
        }

    }

    const mascaraMoeda = (event) => {
        const onlyDigits = event.target.value
          .split("")
          .filter(s => /\d/.test(s))
          .join("")
          .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        event.target.value = maskCurrency(digitsFloat)
      }
      
      const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency
        }).format(valor)
      }
   

    {/*Deixar o campo preço passando sempre double 
        Arrumar o back end para receber a mascara de preco 
        retirando R$ e trocando virgula por ponto
        arrumar a exibição do cpf dos cliente na página Clientes registrados
        E começar a implementar a página de pedidos */}

    return (
        <div className="novo-produto-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>{produtoId === "0" ? "Adicionar novo" : "Alterar"} produto</h1>
                    <p>Adicione as informações do produto e clique em   '{produtoId === "0" ? "Adicionar" : "Alterar"}'</p>
                    <Link className="back-link" to={"/produtos"}>
                        <FiArrowLeft size={16} color="251fc5" /> Voltar
                    </Link>
                </section>
                <form onSubmit={salvarOuAlterar}>
                    <input
                        id='nomeProdutoInput'
                        value={nomeProduto}
                        onChange={e => setNomeProduto(e.target.value)}
                        placeholder="Nome do produto"
                        type="text" />

                   
                    
                    <input 
                    id='precoInput'
                    onInput={mascaraMoeda}
                    type="text"
                    placeholder="R$ 0,00"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                    maxLength={12}
                    />


                    <input
                        id='estoqueInput'
                        value={estoque}
                        onChange={e => setEstoque(e.target.value)}
                        placeholder="Estoque"
                        type="text" />

                    <button className="button" type="submit">{produtoId === '0' ? 'Adicionar' : 'Alterar'}</button>

                </form>
            </div>
        </div>
    )
}