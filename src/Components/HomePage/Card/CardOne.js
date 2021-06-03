import React from 'react'

import styles from './CardOne.module.css'

import tv from '../../../Assets/tv.png'

const CardOne = () => {
    return (
        <section className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.cardGrid}>
                    <div className={styles.cardGridContentText}>
                        <h1>Aproveite na TV.</h1>
                        <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                    </div>
                    <div className={styles.cardGridContentImage}>
                        <img src={tv} alt="Tv da Netflix" className={styles.cardImage} />

                        <video className={styles.cardVideo} autoPlay playsInline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default CardOne