import React, { useState } from 'react'
import './TaskForm.css'

// Step 4: Create a component called TaskForm.js in the components folder. The component should have the following 
//          1. Start with an empty state(default state) for an input field.
//          2. Be able to update the form by setting the state.
//          3. Handle the submit.
//          4. Create an addTask function that can add a task to the list. 
//          5. Create an handleSubmit variable that can handle your addTodo function and can add the item to the list(you can achieve this by using the useState hook). 


const TaskForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setenteredDescription] = useState('');

    const titleChangeHandler = (e) => { //the event's target values is sent as a parameter to 'setEnteredTitle'
        setEnteredTitle(e.target.value); //this then sets that value
    };

    const descrptChangeHandler = (e) => {
        setenteredDescription(e.target.value); //e.target.value is ALWAYS a string, that's why the useState is initialized to string
    };

    //submit event handler
    const submitHandler = (event) => {
        event.preventDefault(); //prevent default browser submission

        //an object that combines and stores all the user inputed data
        const taskInfo = {
            id : Math.random().toString(), //adding a new key 'id'
            title: enteredTitle, 
            description: enteredDescription
        };

        //'onSaveTaskData' comes from 'NewExpense' component
        //'taskInfo' is the user inputed object that is now the parameter 
        //for the function 'addTaskHandler' which 'onSaveTaskData' points to in App component
        props.onSaveTaskData(taskInfo);
        
        //resets the input boxes to empty
        setEnteredTitle('');
        setenteredDescription('');
    };

  return (
    <div className='new-task'>
    <form onSubmit={submitHandler}> 
        <div className='new-task__control'>
            <div className='new-task__control'>
                <label>Task</label>
                <input 
                    type='text' 
                    value={enteredTitle} //'enteredTitle' is the useState variable
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className='new-task__control'>
                <label>Description</label>
                <input 
                    type='text' 
                    value={enteredDescription} 
                    onChange={descrptChangeHandler}  
                />
            </div>
            <div className='new-task__button'>
                <button type='submit'>Add Task</button>
            </div>
        </div>
    </form>
    </div>
  )
}

export default TaskForm