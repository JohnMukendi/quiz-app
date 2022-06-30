import '../styles/globals.css'
import * as React from 'react'

export const userContext = React.createContext();


function MyApp({ Component, pageProps }) {

  const [userName,setUserName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [difficulty,setDifficulty] = React.useState('');
  const [open,setOpen] = React.useState(false);
  const [category,setCategory] = React.useState('')
  const GLOBAL_PROPS = {
    userName,setUserName,
    email,setEmail,
    difficulty,setDifficulty,
    open,setOpen,
    category,setCategory
  }
  return (      
    <userContext.Provider value={GLOBAL_PROPS}>
      <Component {...pageProps} />
    </userContext.Provider>
    
  )
}

export default MyApp