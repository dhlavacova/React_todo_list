//rsc vytvori rychle componentu podle ES6
//import React, {useState} from "react";
import './todoItem.module.scss'
const TodoItem =(props)=>{

    return (

<li>

    <input type='checkbox' checked={props.completeTodo} onChange={()=>props.buttonChangerHandler(props.idTodo)}/>
    {props.titleTodo}
    <div className="button">
    <button >
        🖊
    </button>
    <button onClick={()=> props.deleteTodo(props.idTodo)}>
        ❌
    </button>
    </div>
</li>

    )
}
export default TodoItem