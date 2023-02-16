import styles from './NewTask.module.css';

import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

interface NewTaskProps{
    setTaskList: React.Dispatch<React.SetStateAction<Array<{id: string; name: string}>>>;
    taskList: Array<{id: string; name: string}>;
}

export function NewTask({ setTaskList, taskList }: NewTaskProps){
    const [taskName, setTaskName] = useState('');

    function handleChangeTaskName(event : ChangeEvent<HTMLInputElement>){
        setTaskName(event.target.value)
    }

    function createNewTask(){
        setTaskList([...taskList,{
            id: uuidv4().toString(),
            name: taskName,
        }])
        
        setTaskName('');
    }

    return(
        <div className={styles.contentNewTask}>
            <input 
            className={styles.contentNewTaskInput} 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            onChange={handleChangeTaskName} 
            value={taskName}
            />
            <button className={styles.contentNewTaskButton} onClick={createNewTask} disabled={!taskName}>Criar
            <PlusCircle size={16} color="#F2F2F2" weight="regular"/>
            </button>
        </div>
    )
}