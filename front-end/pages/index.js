import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/introPage.module.css'
import FormFieldPage from './formField'
import { useState, useRef, useEffect } from 'react' 

import { Button,Typography } from '@mui/material'
import Link from 'next/link'

export default function IntroPage() {
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
    <main id={styles.main}>
      <div id={styles.heading}>
        <h1> The Love of Money is the root of all Evil!!!</h1> 
        <h2>{timer}</h2>
        <button onClick={onClickResetBtn()}></button>
      </div>
      
      <video autoPlay muted loop id={styles['background-video']}>
         <source src="/background-video.mp4" type='video/mp4'/>
      </video>

      <div id={styles['background-video-mask']}></div>
      <Link href='./formField'>
        <Button
        id={styles['start-button']} variant='contained'
        color ='success' size='large'
        >
          Start Quizzin'
        </Button>
      </Link>
      
    </main>
    
  )
}
