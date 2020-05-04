import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  //this state is used to only manage the form
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    // update state with each keystroke
    this.setState({
     [e.target.name]: e.target.value
     //this uses computed properties
     //most of the time this looks just like this
     //it is only used so React can connect input to state 
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    //calling parent method

    this.setState({
      task: ""
    });
    //this resets the inputs -- bound by value= this.state.task
  };

  // class property to submit form

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        
        <input
          type="text"
          name="task"
          onChange={this.handleChange}
          value={this.state.task}
          placeholder="item"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;


//Parts of a form must haves: 
//<form>, <input> and usually a <button> </button></form>value={this.state.whateverthisiscalled} type='whatever type this is' name='' //onChange='whatever you call this'
//onSubmit - this is used for when the form is submitted
//computed properties - we need this to have multiple inputs in our forms. We don't need separate onChange handlers for every single input and can make a gerneric function for multiple inputs - our inputs need to have an exact name that is in state
//you need to put a 'name' property on all 'inputs' if you have multiple inputs. This allows state to change based on inputs. Name must match what's in state.
//in handleChange use computed properties to have access to all the input states. 
// handleChange = e => {
//     // update state with each keystroke
//     this.setState({
//       [e.target.name]: e.target.value
//      });
//    };

//label is for forms (acessibility)
//<label htmlFor="username"></label> ---------> for needs to match id on input id="username"

//Passing Data Up to A Parent Component
//In React we generally have downward data flow. 'Smart' parent components with simpler child components 

//you need to map 

//add item is a method that is passed from parent to this form