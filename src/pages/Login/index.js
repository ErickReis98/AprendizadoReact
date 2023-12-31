import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'
import api from '../../Service/api';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('auth/login', data);

            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.Token);

            navigate('/produtos')
        } catch (err) {
            alert('Falha no login. Tente novamente');
        }
    };

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Erudio Logo"/>
                <form onSubmit={login}>
                    <h1>Entre na sua conta</h1>
                    <input
                        placeholder="Usuario"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password" placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                   
                    <button className="button" type="submit">Login</button>
                </form>
            <div>
                <Link className='buttonCad' to="/cadastro/novoUsuario">
                    Não tem cadastro ? Clique aqui para se cadastrar  </Link>                      
              </div>
            </section>
            
            <img src={padlock} alt="Login"/>

        </div>
    )
}


