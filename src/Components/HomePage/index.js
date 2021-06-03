import React from 'react'

import styles from './style.module.css'

import LogoNetflix from '../../Assets/netflix.svg'
import SetaButton from '../../Assets/seta.svg'

import { AiOutlineGlobal } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import Card from './Card';
import Question from './Question';

import { questionsJson } from '../../question'
import Footer from './Footer';

const HomePage = () => {

    return (
        <section>
            <div className={styles.featured}>
                <div className={styles.backgroundGradient}>
                    <header>
                        <img src={LogoNetflix} alt="Logo da netflix" draggable="false" />
                        <nav>
                            <ul>
                                <li>
                                    <AiOutlineGlobal />
                                    Português
                                    <TiArrowSortedDown style={{ fontSize: 20 }} />
                                </li>
                                <li>Entrar</li>
                            </ul>
                        </nav>
                    </header>

                    <section className={styles.featuredContent}>
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>
                        <p>Assista onde quiser. Cancele quando quiser.</p>
                        <span>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</span>
                        <div className={styles.contentForm}>
                            <form>
                                <input placeholder="Email" />
                                <button>Vamos lá
                                    <img src={SetaButton} alt="Seta" />
                                </button>
                            </form>
                        </div>
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
                <div className={styles.contentForm}>
                    <form>
                        <input placeholder="Email" />
                        <button>Vamos lá
                                    <img src={SetaButton} alt="Seta" />
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    )
}


export default HomePage