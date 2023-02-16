import styles from './Tasks.module.css';

import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';

import { EmptyTask } from './EmptyTask';

interface TaskProps{
    taskList: Array<{id: string; name: string}>;
    setTaskList: React.Dispatch<React.SetStateAction<Array<{id: string; name: string}>>>;
    selectedTask : string[];
    setSelectedTask : React.Dispatch<React.SetStateAction<string[]>>;
}

export function Tasks({ setTaskList, taskList, selectedTask, setSelectedTask }: TaskProps){

    function handleTaskStatus(taskId : string){
        if(selectedTask.find(item => item === taskId)){
            setSelectedTask(selectedTask.filter(item => item !== taskId))
        } else{
            setSelectedTask([...selectedTask, taskId])
        }
    }

    function deleteTask(taskId : string){
        const tasksWithOutDeleteOne = taskList.filter((task) => task.id !== taskId);
        setTaskList(tasksWithOutDeleteOne);
        const taskDeleted = selectedTask.filter((task) => task !== taskId);
        setSelectedTask(taskDeleted);
        console.log(taskDeleted);
    }

    return(
        <>
        {taskList.length > 0 ?(
            <div>
                {taskList.map((task) => {
                const isChecked = !!selectedTask.find(item => item === task.id)
                return(
                    <div key={task.id} className={styles.taskContent}>
                        <button className={isChecked ? styles.taskContentButtonClick : styles.taskContentButton} onClick={() => handleTaskStatus(task.id)}>
                            <Check className={isChecked ? styles.checkIconActive : styles.checkIcon} color='#fafafa'/>
                        </button>
                        <p className={isChecked ? styles.taskContentPActive : styles.taskContentP}>{task.name}</p>                      
                        <Trash size={20} color="#808080" weight="regular" onClick={() => deleteTask(task.id)}/>
                    </div>
                )
                })}
            </div>
        ) : (
            <EmptyTask/>
        )}
        </>
    )
}