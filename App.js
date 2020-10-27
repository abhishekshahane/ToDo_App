/*
Now finished Todo stage 4.
*/

import React, {Component} from "react"
import TodoItem from "./ToDoItem"
import todosData from "./todosData"
class App extends Component{
    constructor(){
        super()
        this.state = {
            //Managing todosData here now
            todos: todosData
        }
    }
    render(){
        const init = this.state.todos.map(item => <TodoItem key={item.id} product={item} />)
        return(
            <div>
            {init}
            </div>
        )
    }
}

export default App
