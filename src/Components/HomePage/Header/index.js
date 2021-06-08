import React from 'react'
import styles from './style.module.css'

import LogoNetflix from '../../../Assets/netflix.svg'

import { AiOutlineGlobal } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={LogoNetflix} alt="Logo da netflix" draggable="false" />
            <nav>
                <ul>
                    <li>
                        <AiOutlineGlobal />
                            Português
                        <TiArrowSortedDown style={{ fontSize: 20 }} />
                    </li>
                    <li>
                        <Link to="/login">Entrar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default Header