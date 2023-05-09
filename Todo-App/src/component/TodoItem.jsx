//rsc vytvori rychle componentu podle ES6
import React, {useState} from "react";
const TodoItem =(props)=>{
    const itemCheckbox=document.querySelector('input[type="checkbox"]');
    return (

<li>

    <input type='checkbox' checked={props.completeTodo} onClick={()=>props.buttonImFertigHandler(props.idTodo)}/>
    {props.titleTodo}
    <button onClick={()=> props.buttonListenHandlerTodo(props.idTodo)}>
        ❌
    </button>
</li>

    )
}
export default TodoItem