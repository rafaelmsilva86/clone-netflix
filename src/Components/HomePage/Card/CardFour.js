import React from 'react'

import styles from './CardFour.module.css'

const CardFour = () => {
    return (
        <section className={styles.card}>
            <div className={styles.containerCardGrid}>
                <div className={styles.contentCardImage}>
                    <img src="https://occ-0-1540-420.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUb4fcnETtielPJer_ORwZ2iUanycANl37cr81zDaXC9Fmg9c42ofxt0yxetNltG2xUMgf2Aqimz_q1Nsv-38Ng_EjIc.png?r=1b8" alt="Baixe filmes quando quiser" />
                </div>
                <div className={styles.contentCardText}>
                    <h1>Crie perfis para crianças.</h1>
                    <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                </div>
            </div>
        </section>
    )
}


export default CardFour