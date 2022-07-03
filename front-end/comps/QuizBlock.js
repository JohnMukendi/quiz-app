import styles from '../styles/main.module.css'
import {useContext} from 'react'
import {userContext} from '../pages/_app'
import {useState} from 'react'

const QuizBlock = ({data,nextQuest}) =>{
    const {
    mode,cash,setCash,difficulty,userAnswer,setUserAnswer,trueAnswer,setTrueAnswer,SuicideRound,setSuicideRound,
    SuddenDeathRound,setSuddenDeathRound,
    Done,setDone,isTrue,setIsTrue,percentage,setPercentage
    } = useContext(userContext);

    switch(difficulty){
        case 'easy':
          mode['atPrice'] = 20
          mode['sdPrice'] = 100
          break;
        case 'medium':
          mode['atPrice'] = 200
          mode['sdPrice'] = 1000
          break;
        case 'hard':
          mode['atPrice'] = 2000
          mode['sdPrice'] = 10000
          break;
        default:
            mode['atPrice'] = 20
            mode['sdPrice'] = 100
            break;
      }
    
    
    const random = Math.floor(Math.random() * 4);
    
    const isCorrect = async ( e,quiz) =>{
        setUserAnswer(e.target.value.toLowerCase())
        setTrueAnswer(quiz.correctAnswer.toLowerCase())
        const chosen = e.target.value.toLowerCase()
        const answer = quiz.correctAnswer.toLowerCase()

        if (chosen == answer){
            const res = await nextQuest();
            setIsTrue(true)
            //for suicide round
            if (cash < mode.atPrice * 5){
                setCash(cash + mode.atPrice)
            }else if(cash <= mode.sdPrice * 5){
                setCash(cash + mode.sdPrice)
            }
             
            setPercentage(percentage+10)
            
            if (cash == mode.atPrice * 5){
                confirm('You are about to Enter the suicide Round')
                setSuicideRound(false)
                setSuddenDeathRound(true)    
            }
            if (cash === mode.sdPrice * 5){
                setDone(true)
                //Congratulations

            }
        }else{
            setIsTrue(false)
            alert(false)
        }
    }
    
        return (
            <div className={styles['quiz-block']}>
                <div className={styles['question-div']}>
                {
                    data.map((quiz) =>(
                        <>
                        
                        {quiz.incorrectAnswers.length == 3 ? quiz.incorrectAnswers.splice(random,0, quiz.correctAnswer.toUpperCase( )) : null}
                        <h4 className={styles.h4}><span>{quiz.question}</span></h4>
                        <div className={styles['possible-answers-div']}>
                            
                        {   
                            quiz.incorrectAnswers.map((option,i) =>(
                                <button key={i} onClick={ (e) => isCorrect(e,quiz)} value={option} className={styles['big-button']}>{option}</button>
                                
                            ))
                        }
                                    
                        </div>
                        
                        </>
                        
                    ))
                }
                </div>
                <div className = {styles['money-div']}>
                    Total Amount : R{cash}
                </div>
            </div>
        )
    
    }
    
export default QuizBlock