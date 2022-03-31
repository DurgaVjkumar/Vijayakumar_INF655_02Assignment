import React, {useState} from 'react';

import './App.css';
import TaskData from './TaskData'; //import dummy data array stored in TaskData.js
import  Tasks  from './components/Tasks';
import TaskForm from './components/TaskForm';

// Assignment 2 Read & Create operations on the Task manager using hooks
// Step 1: Create a Task Manager application. 
// Step 2: Create TaskData.js to save the list of tasks.  
// Step 3: Create a useState hook in app.js and pass the data to the state and loop using .map method and display the data in the browser. 
// Step 4: Create a component called TaskForm.js in the components folder. The component should have the following 
//          1. Start with an empty state(default state) for an input field.
//          2. Be able to update the form by setting the state.
//          3. Handle the submit.
//          4. Create an addTask function that can add a task to the list. 
//          5. Create an handleSubmit variable that can handle your addTodo function and can add the item to the list(you can achieve this by using the useState hook). 
// Step 5: After successful execution save all the changes to the local system.
// Step 6: Create a new repository on GitHub named "your-last-name_INF655". 
// Confirm you have committed all changes to your local repository with git. Then push your local git repository code to your GitHub repository.
// Step 7: Copy the URL to your GitHub repository. 
// Step 8: In the submission area, click the "Write Submission" button and paste the URL to your GitHub repository. 



function App() {
  const [tasks, setTasks] = useState(TaskData);

  const addTaskHandler = (task)=>{
    //use a function in 'setTasks' that automatically receives 
    //a snapshot of the previous state
    setTasks( (prevTasks) =>{
      return [task, ...prevTasks]; //adds task to the list
    });
  };

  return (
    <div className="App">
      <h1>Welcome ot Task Manager</h1>
      {/* pass TaskData array to Tasks component */}
      <Tasks items={tasks}/> 
      <TaskForm onSaveTaskData={addTaskHandler}></TaskForm>
    </div>
  );
}

export default App;
