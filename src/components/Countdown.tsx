import { useContext, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown(){

    const { 
        minutes,
        seconds,
        hasFinished,
        isActive, 
        startCountdown,
        resetCountdown 
    } = useContext(CountdownContext)


    const  [minuteLeft, minuteRight]= String(minutes).padStart(2, '0').split('');
    const [secontLeft, secondRight] = String(seconds).padStart(2, '0').split('');
     
    //Isso dai é a formatação dos números sendo parte de como a informação é visualizada 

    return(
    <div>
       <div className={styles.countdownContainer}>
           <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
           </div>
                <span>:</span>
            <div>
                <span>{secontLeft}</span>
                <span>{secondRight}</span>
            </div>    
       </div> 

        { hasFinished ? (
              <button 
              disabled
              className={styles.countdownButton}
              >
                  Ciclo encerrado
              </button>
        ) : (
           <>
                { isActive ? (
                <button 
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
                >
                    Abandonar ciclo
                </button>
            ) : (
                
                <button 
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
                >
                    Iniciar ciclo
                </button>
            ) }
           </>
        )}


    </div>
    );
}