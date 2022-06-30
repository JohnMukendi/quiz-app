import { userContext } from "../pages/_app";
import { useContext } from "react";
import styles from '../styles/formFieldPage.module.css'
import * as React from 'react';
import {Box,Toolbar} from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Modal from '@mui/material/Modal';

  
const InstrPopUp = () => {
  const {open,setOpen,userName,difficulty,category} = useContext(userContext);
    
    var mode = {}
    
    switch(difficulty){
      case 'easy':
        mode['atPrice'] = 100
        mode['sdPrice'] = 200
        break;
      case 'medium':
        mode['atPrice'] = 1000
        mode['sdPrice'] = 2000
        break;
      case 'hard':
        mode['atPrice'] = 10000
        mode['sdPrice'] = 20000
        break;
    }
    const handleClose = () => {
      setOpen(false)
    }
    return ( 
        <div >
            <Modal
              open={open}
              onClose = {handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
        <Box className={styles['pop-up-div']}>
          <div className={styles["pop-up-heading"]}>
            <p>WELCOME {userName.toUpperCase()}!!!</p>
          </div>
          <div className={styles['pop-up-heading2']}>So you think you can win some money huh?,let's see how much you know about <b>{category}</b></div>
          <div>You have chosen the <b>{difficulty} </b> level so you'll be given <b>R{mode.atPrice}</b> in the 
          <b>Attempted Suicide </b>round and <b>R{mode.sdPrice}</b> in the <b>Sudden Death round</b> round for each question you get correct
          
          During the 1st round,whenever you get a question correct,you'll be asked wheter you want to progress to the next question or
          wheter you want to pull out and take the money you've atttained.

          During the 2nd round,whenever you get a question correct,you'll gain <b>R{mode.sdPrice}</b>, but if you get a cuestion wrong and you probabaly will LOL
          <b>YOU'LL LOOSE ALL YOUR MONEY</b>
          if all goes well you'll earn a total of <b>R {mode.sdPrice * 5}</b>
          </div>  
          <Toolbar className={styles['pop-up-button-div']}>
            <Button onClick={handleClose} color='error' variant = 'contained'>Cancel</Button>
            <Link href ='/main'><Button href='/main' color = 'success' variant='contained' >Proceed</Button></Link>
          </Toolbar>
          
        </Box>
      </Modal>
        </div>
     );
}
 
export default InstrPopUp;