import TodoItem from "../TodoItem/TodoItem.jsx";
import styles from "./todoList.module.scss"
import {useState} from "react";
//import React from "react"

const TodoList = ({myTaskprops, setMyTaskprops,deleteTodo}) => {

console.log('style:',styles)

    const handleChange = (idecko) => {
        console.log('klik', idecko)
        setMyTaskprops((prevState) => prevState.map((todo) => {
            if (todo.id === idecko) {
                return {
                    ...todo, complete: !todo.complete
                }
            }
            return todo
        }))
    }

    return (
        <ul className={styles.ul}>
            {myTaskprops.map((el) => {

                let {id, title, complete} = el

                return (<TodoItem
                    key={id}
                    idTodo={id}
                    titleTodo={title}
                    completeTodo={complete}
                    buttonChangerHandler={handleChange}
                    deleteTodo={deleteTodo}/>)

            })}
        </ul>
    )
}
export default TodoList