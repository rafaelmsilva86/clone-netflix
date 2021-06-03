import React from 'react'
import styles from './style.module.css'

import { AiOutlineGlobal } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Dúvidas? Ligue 0800-761-4631</p>
            <div className={styles.contentFooter}>
                <ul>
                    <li>Perguntas frequentes</li>
                    <li>Relações com investidores</li>
                    <li>Formas de assistir</li>
                    <li>Informações corporativas</li>
                    <li>Originais Netflix</li>
                </ul>
                <ul>
                    <li>Centro de ajuda</li>
                    <li>Carreiras</li>
                    <li>Termos de uso</li>
                    <li>Entre em contato</li>
                </ul>
                <ul>
                    <li>Conta</li>
                    <li>Resgatar cartão pré-pago</li>
                    <li>Privacidade</li>
                    <li>Teste de velocidade</li>
                </ul>
                <ul>
                    <li>Imprensa</li>
                    <li>Comprar cartão pré-pago</li>
                    <li>Preferências de cookies</li>
                    <li>Avisos legais</li>
                </ul>
            </div>
            <p className={styles.optionLanguage}>
                <AiOutlineGlobal />
                Português
                <TiArrowSortedDown style={{ fontSize: 20 }} />
            </p>
            <small>Netflix Brasil</small>
        </footer>
    )
}



export default Footer