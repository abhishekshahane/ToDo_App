import React from "react"
import Checkbox from "./components/Checkbox"

function App(){
    return(
<div>
<input type="checkbox" id = "todo"/>
<label htmlFor="todo">TODO</label>
<br></br>
<input type="checkbox" id = "todoa"/>
<label htmlFor="todoa">TODO</label>
<br></br>
<input type="checkbox" id = "todob"/>
<label htmlFor="todob">TODO</label>
<br></br>
</div>
    )
}
export default App