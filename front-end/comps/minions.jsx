import Image from 'next/image'
import {useContext} from 'react'
const MinionsPage = ({cash}) => {
    return ( 
        <>
            <img styles={{width:'30px'}} src='minion.jpeg'/>
            <h1 style={{color:'black'}}>LOL!!!! You Lost R{cash}</h1>
        </>
     );
}
 
export default MinionsPage;