/*
Now finished Todo stage 6.
*/

import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
class App extends Component{
    constructor(){
        super()
        this.state = {
            //Managing todosData here now
            todos: todosData
        }
        //As per the lecture, we have to bind the function to this.
                this.handleChange = this.handleChange.bind(this)
    }
    //Our function, that takes the id as a param.
    handleChange(id){
        // Set the new state, taking into account the previous state.
this.setState(function(prevState){
    // If the todo id is equal to the id we are checking, make the todo checked/unchecked.
    const updated = prevState.todos.map(function(todo){
        if (todo.id === id){
            //Flip the todo
return{
    ...todo,
    //Return completed instead, not modifying old state
    completed: !todo.completed
}
        }
        //return the new todo
        return todo
    })
    //Set the todos to be updated(as per the new array we've made).
    return{
        todos: updated
    }
    })
    }
        
    render(){
        const init = this.state.todos.map(item => <TodoItem key={item.id} product={item} handleChange={this.handleChange}/>)
        return(
            <div>
            {init}
            </div>
        )
    }
}

export default App
