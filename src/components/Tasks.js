import React from 'react'
import { TaskItem } from './TaskItem';
import './Tasks.css'

// Step 3: Create a useState hook in app.js 
//and pass the data to the state and loop using .map method and display the data in the browser. 


const Tasks = (props) => {

    return (
        <ul className='task-list'>
            {/* use .map function to loop through the array and create a TaskItem component for each array element */}
            {props.items.map((task) => (
                <TaskItem 
                    key={task.id} 
                    title={task.title} 
                    description={task.description}
                />
            ))}
        </ul>
    )
}

export default Tasks
