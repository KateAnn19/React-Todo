import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
    {
      task: 'Organize Garage',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: Date.now(),
      completed: false
    },
    {
      name: "Eat Bananas",
      id: Date.now(),
      completed: false
    },
    {
      name: "Make dinner",
      id: 124,
      completed: false
    },
    {
      name: "Throw out milk",
      id: 1235,
      completed: false
    },
    {
      name: "Take over the world",
      id: 1246,
      completed: false
    },
    {
      name: "Collect Raw Honey",
      id: 1237,
      completed: false
    },
    {
      name: "Make Granola",
      id: 1248,
      completed: false
    }
  ];
  


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: tasks,
      id: ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  toggleCompleted = clickedTaskId => {
    this.setState({
      //tell state property what we're trying to update
      //this.state.groceries[3].purchased = true //never do this because
      //react is checking the same object against itself...it will come
      //out as true and they will never rerender
      //follow immutability rules
      //recreate the entire object/array (immutability)
      //arrays -> ...(spread operator), oR immutable array methods
      tasks: this.state.tasks.map(task => {
        if (task.id === clickedTaskId) {
          return {
            ...task,
            // ...item is doing this ----------------------------
            // {
            //   name: "Raw Honey",
            //   id: 1237,
            //   purchased: false
            // },
            //---------------------------------------
            completed: !task.completed
            //--------------------------------
            //we are adding a new purchased field which means the
            //object has two purchased property fields
            //the second purchased property field will overwrite the first
          };
        } else {
          return task;
        }
      })
    }); //always pass in an object {}
  };

  addTask = taskName => {
    //add a new item to the groceries state
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        {/* this.state.groceries is passing state down  */}
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          //passing togglePurchased as a prop
        />
      </div>
    );
  }
}

export default App;
