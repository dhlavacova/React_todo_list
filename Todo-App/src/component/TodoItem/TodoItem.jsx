//rsc vytvori rychle componentu podle ES6
//import React, {useState} from "react";

import styles from './todoItem.module.scss'
const TodoItem =(props)=>{

    return (

<li className={styles.item}>

    <input type='checkbox' checked={props.completeTodo} onChange={()=>props.buttonChangerHandler(props.idTodo)}/>
    {props.titleTodo}
    <div >
    <button className={styles.button} >
        🖊
    </button>
    <button className={styles.button} onClick={()=> props.deleteTodo(props.idTodo)}>
        ❌
    </button>
    </div>
</li>

    )
}
export default TodoItem