import styles from '../styles/main.module.css'
import {useContext} from 'react'
import {userContext} from '../pages/_app'
import {useState} from 'react'


const ModeHeader = (props) =>{
    return (
        <header className={styles.header}>
                <div className={styles.box}>
                    <div className ={styles.inner}>
                        <span>{props.firstText}</span>
                    </div>
                    <div className={styles.inner}>
                        <span>{props.firstText}</span>
                    </div>
                </div>
        </header>
    )
}
export default ModeHeader