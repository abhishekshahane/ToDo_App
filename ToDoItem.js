// Doesn't throw a error anymore:)
import React from "react" 

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input  type="checkbox"
            // Every time the checkbox is checked, call the handleChange method so we can update it. 
            onChange = {()=> props.handleChange(props.product.id)} 
            checked={props.product.completed}/>
            <p>{props.product.text}</p>
        </div>
    )
}

export default TodoItem
