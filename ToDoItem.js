// Doesn't throw a error anymore:)
import React from "react"
function change(){
console.log("Changed!")

}

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input id="checkbox" type="checkbox" onChange = {change} checked={props.product.completed}/>
            <p>{props.product.text}</p>
        </div>
    )
}

export default TodoItem
