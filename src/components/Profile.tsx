import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengersContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Vitor716.png" alt="Vitor Vieira"/>
            <div>
               <strong>Vitor Vieira</strong>
                <p>
                  <img src="icons/level.svg" alt="Level "/>  
                  Level {level}
                </p>
            </div>
        </div>
    );
}

