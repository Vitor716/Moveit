import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengersContext';
import styles from '../styles/components/LeveUpModal.module.css'

export function LeveUpModal(){

    const {level, closeLevelUpModal} =  useContext(ChallengesContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    );   
}