import React from 'react'
import styles from './style.module.css'

import LogoNetflix from '../../../Assets/netflix.svg'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const LoginForm = () => {
    return (
        <>
        <section className={styles.contentLogin}>
            <div className={styles.backgroundGradient}>
                <header className={styles.headerLogin}>
                    <Link to="/">
                        <img src={LogoNetflix} alt="Logo da Netflix"/>
                    </Link>
                </header>
                <div className={styles.containerForm}>
                    <h1>Entrar</h1>
                    <form>
                        <input className={styles.input} placeholder="Email ou número de telefone" />
                        <input className={styles.input} placeholder="Senha" />
                        <button className={styles.button}>Entrar</button>
                        <ul className={styles.listForm}>
                            <li>
                                <input defaultChecked={true} type="checkbox" />
                                <label>Lembre-se de mim</label>
                            </li>
                            <li>
                                <a href="#">Precisa de ajuda?</a>
                            </li>
                        </ul>
                    </form>
                    <p className={styles.connectRede}>
                        <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="Facebook" />
                        Conectar com Facebook
                    </p>
                    <p className={styles.textNewUser}>Novo por aqui? <strong>Assine agora.</strong></p>
                    <p className={styles.textCaptcha}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a>Saiba mais.</a></p>
                </div>
            </div>
        </section>  
        <Footer />
        </>
    )
}


export default LoginForm