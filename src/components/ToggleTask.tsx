import React, { useState } from 'react'
import { TaskList } from '../data/staticData';
import type { Task } from '../types/taskProps.type';

const ToggleTask = () => {
    type stateTypes = 'All' | 'Active' | 'Done'
    const [state, setState] = useState<stateTypes>('All');
    const [tasks, setTasks] = useState<Task[]>(TaskList);

    const filterTasks =
        tasks.filter((task) => {
            if (state === "Active") return !task.completed
            if (state === "Done") return task.completed
            return true
        })
    const toggleChange = (id: number) => {
       setTasks((prevTasks)=>(
            prevTasks.map((task)=>(
                task.id===id ?({...task,completed:!task.completed}):task
            ))
       ))
    }
    return (
        <>
            <div> My Tasks</div>
            <div>
                <button onClick={() => setState("All")}>All</button>
                <button onClick={() => setState("Active")}>Active</button>
                <button onClick={() => setState("Done")}>Done</button>
            </div>
            <div>
                {
                    filterTasks.length > 0 ? (
                        filterTasks.map((task) => (
                            <div key={task.id}>
                                <input type='checkbox' checked={task.completed} onChange={() => toggleChange(task.id)} />
                                {task.title}
                            </div>

                        ))

                    ) : (
                        <p>No Tasks</p>
                    )


                }
            </div>
        </>
    )
}

export default ToggleTask