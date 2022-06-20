import styles from '../styles/formFieldPage.module.css'
import { Button } from '@mui/material';

const FormFieldPage = () => {
    return ( 
        <>
        <form id={styles.form} action="/" method="post">
            <div className={styles["text-field-div"]}>
                <label htmlFor="username">Enter your Name : </label>
                <input type="text" name ='username'  autoFocus required />
            </div>
            <div className={styles["text-field-div"]}>
                <label htmlFor="email">Enter your Email : </label>
                <input type="email" name ='username'  autoFocus required />
            </div>
            
            <div className={styles['radio-field-div']}>
                
                <input type="radio" name="difficulty" required value="easy" />
                <input type="radio" name="difficulty" value="medium" />
                <input type="radio" name="difficulty" value="hard" />
            
                
            </div>
            nnnnnnn
            <Button type="submit" id={styles['play-button']}>PLAY</Button>
        </form>
        
        </>
     );
}
 
export default FormFieldPage;