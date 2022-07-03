import styles from '../styles/main.module.css'
import {useContext} from 'react'
import {userContext} from '../pages/_app'
import {useState} from 'react'


const Progress = () => {
    const {percentage,setPercentage} = useContext(userContext)
    return ( 
        <>
        <div className={styles["progress-container"]}>
            <div className={styles.row}>
                <div className={styles["col-md-6"]}>
                    <h3 className={styles["progress-title"]}>HTML5</h3>
                    <div className={styles["progress"]}>
                        <div className={styles["progress-bar"]} style={{width:percentage+'%'}}>
                            <div className={styles["progress-value"]}>{percentage}%</div>
                        </div>
                    </div>
        
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Progress;