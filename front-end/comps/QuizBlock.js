//import styles from '../styles/main.module.css'
import styles from '../styles/questions.module.css'
import {useContext} from 'react'
import {userContext} from '../pages/_app'
import {useState} from 'react'
import useSound from 'use-sound'
// import correct from '../public/correct.mp3'
// import wrong from '../public/crowd-boo.mp3'

const QuizBlock = ({data,nextQuest}) =>{
    const {
    mode,cash,setCash,difficulty,userAnswer,setUserAnswer,trueAnswer,setTrueAnswer,SuicideRound,setSuicideRound,
    SuddenDeathRound,setSuddenDeathRound,
    Done,setDone,isTrue,setIsTrue,percentage,setPercentage
    } = useContext(userContext);

    // const [right] = useSound(correct);
    // const [inCorrect] = useSound(wrong);


    switch(difficulty){
        case 'easy':
          mode['atPrice'] = 20
          mode['sdPrice'] = 200
          break;
        case 'medium':
          mode['atPrice'] = 200
          mode['sdPrice'] = 2000
          break;
        case 'hard':
          mode['atPrice'] = 2000
          mode['sdPrice'] = 20000
          break;
        default:
            mode['atPrice'] = 20
            mode['sdPrice'] = 200
            break;
      }
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);

    //generates a random number so that the div of the correct answer goes in a random position
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
                setPercentage(percentage+10)
                setCash(cash + mode.atPrice)

            }
            //for sudden death round
            else if(cash < mode.sdPrice * 5){

                setPercentage(percentage+10)

                if (cash == mode.atPrice * 5){
                    confirm('You are about to Enter the suicide Round')
                    setSuicideRound(false)
                    setSuddenDeathRound(true)
                    setCash(cash + 100)    
                }else{
                    setCash(cash + mode.sdPrice)
                }
                
            }else{
                alert('err')
            }
             
            
            
            
            if (cash === mode.sdPrice * 5){
                setDone(true)
                //Congratulations

            }
        }else{
            setIsTrue(false)
            alert(false)
        }
        
        
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < 10) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }
    
	
    
        return (
            <div className={styles['quiz-block']}>
                    
                <div className={styles['app']}>

                {
                    data.map((quiz) =>(
                        <>
                        
                        {quiz.incorrectAnswers.length == 3 ? quiz.incorrectAnswers.splice(random,0, quiz.correctAnswer.toUpperCase( )) : null}
                        
                        <div className={styles['question-section']}>
                        <h4 className={styles.h4}><span>{quiz.question}</span></h4>
                            <div className={styles['question-count']}>
							    <span>Question {currentQuestion + 1}</span>/{10}
						    </div>   
                        {   
                            quiz.incorrectAnswers.map((option,i) =>(
                                <button key={i} onClick={ (e) => isCorrect(e,quiz)} value={option} className={styles['button']}>{option}</button>
                                
                            ))
                        }
                                    
                        </div>
                        
                        
                        </>
                        
                    ))
                }
                </div>
                
            </div>
        )
    
    }
    
export default QuizBlock