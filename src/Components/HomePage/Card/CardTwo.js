import React from 'react';
import styles from './CardTwo.module.css'

import tel from '../../../Assets/tel.jpg'

const CardTwo = () => {
    return (
        <section className={styles.card}>
            <div className={styles.containerCardGrid}>
                <div className={styles.contentCardImage}>
                    <img src={tel} alt="Baixe filmes quando quiser" />

                    <div className={styles.contentCardImageCard}>
                        <div className={styles.contentCardImageCardMovie}>
                            
                        </div>
                        <div className={styles.contentCardImageCardText}>
                            <p>Stranger Things</p>
                            <p>Download em andamento...</p>
                        </div>
                        <div className={styles.contentCardImageCardGif}>

                        </div>
                    </div>
                </div>
                <div className={styles.contentCardText}>
                    <h1>Baixe séries para assistir offline.</h1>
                    <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                </div>
            </div>
        </section>
    )
}




export default CardTwo