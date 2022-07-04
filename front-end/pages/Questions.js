
import { useState, useRef, useEffect } from 'react' 

export default function Questions(props){
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    //incides the intervals
  const intervalRef = useRef(null);
  //the state for our timer
  const [timer, setTimer] = useState('00:00:00')
  //Sorts out the targeted timer and the current time
  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000) % 60)
    const minutes = Math.floor((total/1000/60) % 60)
    const hours = Math.floor((total/1000/60*60) % 60)
    const days = Math.floor((total/1000/60*60*24))
    return{
      total, days, hours, minutes, seconds
    }
  }
  // update the timer and also it when the timer reaches zero
  function startTimer(deadline) {
    let { total, days, hours, minutes , seconds} = getTimeRemaining(deadline);
    if (total >= 0) {
      //updates the current time
      //checks if less than 10 we need to add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }else{
      clearInterval(intervalRef.current)
    }
  }
  //reset the timer starting from the start
  function clearTimer(endtime) {
    setTimer('00:00:10');
    if(intervalRef.current) clearInterval(intervalRef.current)
    const id = setInterval(() => {
      startTimer(endtime)
    }, 1000);
    intervalRef.current = id
  }

  function getDeadlineTime(){
    let deadline = new Date()

    deadline.setSeconds(deadline.getSeconds() + 10)
  }

  useEffect(() => {
    clearTimer(getDeadlineTime())
    return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
  }, [])

  function onClickResetBtn(){
    if(intervalRef.current) clearInterval(intervalRef.current)
    clearTimer(getDeadlineTime())
  }

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
                    <h2>{timer}</h2>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}