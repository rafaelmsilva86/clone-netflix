import React, { useState } from 'react'
import styles from './style.module.css'

import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


const Question = ({title, conteudo}) => {

    const [questionActive, setQuestionActive] = useState(false)

    const handleClick = () => {
        setQuestionActive((prevState) => !prevState)
    }


    return (
        <section className={styles.containerQuestion}>
            <ul>
                <li className={styles.firstLi} onClick={handleClick}>
                    <p>{title}</p>
                    {
                        questionActive
                            ?
                            <IoIosClose style={{ color: 'white', fontSize: 55 }} />
                            :
                            <IoIosAdd style={{ color: 'white', fontSize: 55 }} />
                    }
                </li>
                {
                    questionActive &&
                    <li className={styles.lastLi}>
                        {
                            conteudo.map((text) => (
                                <p>{text}</p>
                            ))
                        }
                    </li>
                }
            </ul>
        </section>
    )
}


export default Question