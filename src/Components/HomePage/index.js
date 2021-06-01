import React from 'react'

import styles from './style.module.css'

import LogoNetflix from '../../Assets/netflix.svg'
import SetaButton from '../../Assets/seta.svg'

const HomePage = () => {
    return (
        <section>
            <div className={styles.featured}>
                <div className={styles.backgroundGradient}>
                    <header>
                        <img src={LogoNetflix} alt="Logo da netflix" draggable="false"/>
                        <nav>
                            <ul>
                                <li>Português</li>
                                <li>Entrar</li>
                            </ul>
                        </nav>
                    </header>

                    <section className={styles.featuredContent}>
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>
                        <p>Assista onde quiser. Cancele quando quiser.</p>
                        <span>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</span>
                        <div>
                            <form>
                                <input placeholder="Email" />
                                <button>Vamos lá 
                                    <img src={SetaButton}  />
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}


export default HomePage