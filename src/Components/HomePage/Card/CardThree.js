import React from 'react'

import styles from './CardThree.module.css'

import device from '../../../Assets/device.png'


const CardThree = () => {
    return (
        <section className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.cardGrid}>
                    <div className={styles.cardGridContentText}>
                        <h1>Assista quando quiser.</h1>
                        <p>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</p>
                    </div>
                    <div className={styles.cardGridContentImage}>
                        <img src={device} alt="Tv da Netflix" className={styles.cardImage} />

                        <video className={styles.cardVideo} autoPlay playsInline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default CardThree