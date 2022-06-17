import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FormFieldPage from './formField'
export default function Home() {
  return (
    <>
      {/* <video controls autoplay loop>
         <source src="/VID-20211130-WA0031.mp4" type='video/mp4'/>
      </video> */}

      <FormFieldPage/>

      
    </>
    
  )
}
