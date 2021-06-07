import React from 'react'

import styles from './style.module.css'

import SetaButton from '../../Assets/seta.svg'

import Card from './Card';
import Question from './Question';

import { questionsJson } from '../../question'
import Footer from './Footer';
import Header from './Header';
import Form from './Form';

const HomePage = () => {

    return (
        <section>
            <div className={styles.featured}>
                <div className={styles.backgroundGradient}>
                    <Header />

                    <section className={styles.featuredContent}>
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>
                        <p>Assista onde quiser. Cancele quando quiser.</p>
                        <span>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</span>
                        <Form />
                    </section>
                </div>
            </div>
            <Card />
            <div className={styles.questionTitle}>
                <h1>Perguntas frequentes</h1>
            </div>
            {
                questionsJson.map((conteudo) => (
                    <Question key={conteudo.title} title={conteudo.title} conteudo={conteudo.response} />
                ))
            }

            <div className={styles.contact}>
                <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <Form />
            </div>
            <Footer />
        </section>
    )
}


export default HomePage