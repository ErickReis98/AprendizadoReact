import React from 'react';
import './styles.css';
import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Login() {
    return (
        <div className="login-container">
            <section className='form'>
                <img src={logoImage} alt="Erudio Logo" />
                <form>
                    <h1>Entre na sua conta</h1>
                    <input placeholder="Usuario" />
                    <input type="password" placeholder="Senha" />

                    <button className="button" type="submit">Login</button>


                </form>
            </section>

            <img src={padlock} alt="Login" />
        </div>


    )
}

