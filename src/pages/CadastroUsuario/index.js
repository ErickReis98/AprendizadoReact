import React, {useState, useEffect} from 'react';
import './styles.css';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../Service/api'
import logoImage from '../../assets/logo.svg'

export default function CadastroUsuario(){

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGenero] = useState('');
    const [ddd, setDdd] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
   
    async function salvarUsuario(e){
        e.preventDefault();

       
        const data = {

            uDTO:{
            username,
            password,
            role
            },
            puDTO:{
            nome,
            email,
            cpf,
            genero,
            ddd,
            telefone
            }
        }

       
        try {
                await api.post('auth/registerPerfil', data);
            {/* Arrumar a conclusão do cadastro de usuario e 
            colocar uma página de confirmação de cadastro*/}
            navigate('/cadastro/cadastradoSucesso');
        } catch (err) {
            alert('Erro ao criar usuario. Confira os dados e tente novamente')
        }
    }

    return (
        <div className="novo-usuario-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>Preencha os campos com seus dados</h1>
                    <br></br>
                    <Link className="back-link" to={"/"}>
                        <FiArrowLeft size={16} color="251fc5" /> Voltar
                    </Link>
                </section>
                <form onSubmit={salvarUsuario}>
                    <input 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username" 
                    type="text" />
                    
                    <input 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome" 
                    type="text" />

                    <input 
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    placeholder="Role" 
                    type="text" />

                    <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email" 
                    type="text" />

                    <input 
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="CPF" 
                    type="text" />
                
                    <select name="genero" value={genero} onChange={num => setGenero(num.target.value)}>
                            <option value="">Genero</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                    </select>

                    <input          
                    value={ddd}
                    onChange={e => setDdd(e.target.value)}
                    placeholder="DDD" 
                    type="number" />

                    <input          
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    placeholder="Telefone" 
                    type="number" />

                    <input          
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha" 
                    type="password" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>

    )
}