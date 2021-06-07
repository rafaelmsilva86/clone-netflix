import React from 'react'
import styles from './style.module.css'

import SetaButton from '../../../Assets/seta.svg'

const Form = () => {
    return (
        <div className={styles.contentForm}>
            <form>
                <input placeholder="Email" />
                <button>Vamos lá
                    <img src={SetaButton} alt="Seta" />
                </button>
            </form>
        </div>
    )
}




export default Form