//this is the main page that will have all the questions and answers
import {useState,useContext} from 'react'
import { userContext } from './_app';
import styles from '../styles/main.module.css'
import QuizBlock from '../comps/QuizBlock'
import ModeHeader from '../comps/modeHeader'
import MinionsPage from '../comps/minions';
import Progress from '../comps/progress'
import {user_email} from './_app'

const MainPage = () => {
    
    var {difficulty,category,SuicideRound,SuddenDeathRound,isTrue,} = useContext(userContext);
    
    //if for some reason the user did'nt choose the difficulty or category it will default to easy and geography respectively
    if (difficulty == '' && category ==''){
        difficulty = 'easy'
        category = 'Geography'
    }
    //this data variable stored in state will hold the data from the api when setState is called
    const [data,setData] = useState([]);
    
    //this function sets the data variable to the data retreived from the api
    const nextQuest = async ()=>{
        //this endpoint is set up to spit out one question at a time (limit=1)        
        const url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=1&region=ZA&difficulty=${difficulty}`
        const res = await fetch(url);
        setData(await res.json())    
    }
    
    return (
        <>
        
        <div className={styles.main}>
         { SuicideRound ? <ModeHeader firstText = 'Suicide Round' /> : <ModeHeader firstText = 'Sudden Death'/>  }
        <div className = {styles['progress-div']}>
            <Progress/>
        </div>   
        

        {/* mapping through the data from the api and outputting the question and incorrect answers    */}

        <div className={styles['sudden-death-div']}>
            {isTrue ? <QuizBlock data={data} nextQuest = {nextQuest}/> : <MinionsPage/>}
          
        </div>
        
        {/* when this button is clicked, the nextQuest function is called which fetches new data from the api */}
        <button className={styles['next-button']} onClick={nextQuest}>Next</button>
    
        </div>
        </> 
     
    )
}
 
export default MainPage