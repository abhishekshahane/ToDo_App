//BE WARNED!
//This does throw a error, but you can see the results.
import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.product.completed}/>
            <p>{props.product.text}</p>
        </div>
    )
}

export default TodoItem
