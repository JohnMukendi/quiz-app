import styles from '../styles/main.module.css'
import {useEffect,useState,useContext} from 'react'
import {userContext} from '../pages/_app'

const Timer = ({nextQuest}) =>{
    const {isTrue} = useContext(userContext);

    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);

    var timer
    
    const timerFunc = () =>{
        if (isTrue){
            //alert('p')
            timer = setInterval(() =>{
                setSeconds(seconds -1)
                if (seconds === 0){
                    setSeconds(30)
                }
             },1000)
        }else{
            null
        }
         
         return () => clearInterval(timer)
    }
    timerFunc()
    return (
        <div>
            {seconds}
        </div>
    )
}
export default Timer