import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/introPage.module.css'
import FormFieldPage from './formField'
import { useState, useRef, useEffect } from 'react' 

import { Button,Typography } from '@mui/material'
import Link from 'next/link'

export default function IntroPage() {
  
  
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
