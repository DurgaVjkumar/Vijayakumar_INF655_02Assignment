
import './App.css';

// Step 2: Create two variables named toDoList and myName 

// Step 3: Assign some array of objects to that variable using JSX. 

// Step 4: Render a random element (using Math.random or any method) from toDoList on the browser with a className: random. 

// Example: Hello Ramsey you have a task Office work to finish.  


const myName = "Durga";
const toDoList = [
  {
    id: 1,
    title: "Homework 1",
    description: "finish the first assignement",
  },
  { 
    id: 2,
    title: "Taxes",
    description: "gather tax documents",
  },
  {
    id: 3,
    title: "Library returns",
    description: "return overdue books",
  },
  {
    id: 4,
    title: "Dog meds",
    description: "give Fido his daily antibiotics",
  },
];

const pickToDo = () => { 
  const int = Math.floor(Math.random()*4);
  return toDoList[int].title +": " + toDoList[int].description;
};

function App() {
  return (
    <div className="App">
      <h1>Hello {myName}, here's your task</h1>
      <p className='random-task'>{pickToDo()}</p>
    </div>
  );
}

export default App;
