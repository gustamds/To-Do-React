import styles from './EmptyTask.module.css';

import ListEmpty from '../assets/Clipboard.png';

export function EmptyTask(){
    return(
        <div className={styles.contentMessage}>
            <img className={styles.imgEmpty} src={ListEmpty} alt="Lista Vazia" />
            <p className={styles.paragraphBold}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.paragraphLight}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}