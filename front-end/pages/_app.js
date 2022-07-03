import '../styles/globals.css'
import * as React from 'react'

export const userContext = React.createContext();


function MyApp({ Component, pageProps }) {

  const [userName,setUserName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [difficulty,setDifficulty] = React.useState('');
  const [open,setOpen] = React.useState(false);
  const [category,setCategory] = React.useState('')
  const mode = {}
  const [cash,setCash] = React.useState(0);
  const [userAnswer,setUserAnswer] = React.useState('');  
  const [trueAnswer,setTrueAnswer] = React.useState('')  
  const [SuicideRound,setSuicideRound] = React.useState(true) 
  const [SuddenDeathRound,setSuddenDeathRound] = React.useState(false) 
  const [Done,setDone] = React.useState(false)
  const [isTrue,setIsTrue] = React.useState(true)
  const [percentage,setPercentage] = React.useState(0)
  const GLOBAL_PROPS = {
    userName,setUserName,
    email,setEmail,
    difficulty,setDifficulty,
    open,setOpen,
    category,setCategory,
    mode,
    cash,setCash,
    userAnswer,setUserAnswer,
    trueAnswer,setTrueAnswer,
    SuicideRound,setSuicideRound,
    SuddenDeathRound,setSuddenDeathRound,
    Done,setDone,
    isTrue,setIsTrue,
    percentage,setPercentage
  }
  
  console.log(GLOBAL_PROPS)
  return (      
    <userContext.Provider value={GLOBAL_PROPS}>
      <Component {...pageProps} />
    </userContext.Provider>
    
  )
}

export default MyApp
