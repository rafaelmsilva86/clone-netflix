import React from 'react'
import styles from './style.module.css'

import { AiOutlineGlobal } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";


const Footer = () => {
    return (
        <footer className={styles.footerLogin}>
            <div className={styles.footerLoginCenter}>
                <p>Dúvidas? Ligue 0800-761-4631</p>
                <div className={styles.footerLoginCenterList}>
                    <ul>
                        <li>Perguntas frequentes</li>
                        <li>Preferências de cookies</li>
                    </ul>
                    <ul>
                        <li>Centro de ajuda</li>
                        <li>Informações corporativas</li>
                    </ul>
                    <ul>
                        <li>Termos de uso</li>
                    </ul>
                    <ul>
                        <li>Privacidade</li>
                    </ul>
                </div>

                <p className={styles.optionLanguage}>
                    <AiOutlineGlobal />
                        Português
                    <TiArrowSortedDown style={{ fontSize: 20 }} />
                </p>
            </div>
        </footer>
    )
}


export default Footer