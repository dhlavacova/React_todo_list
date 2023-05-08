import TodoItem from "./TodoItem.jsx";
import "./todoList.scss"
import {useState} from "react";
//import React from "react"

const TodoList = (props) => {
    const [myTask,setMyTask] = useState(props.MyProps);
    const buttonListenHandler = (idecko) => {
const filterTask=myTask.filter((oneTask)=>{
        return oneTask.id!==idecko;
})
        setMyTask(filterTask)
        console.log('delete task')
    }



    return (
        <ul>
            {myTask.map((el) => {

                let {id, title, complete} = el

                return (<TodoItem
                    key={id}
                    idTodo={id}
                    titleTodo={title}
                    completeTodo={complete}
                    buttonListenHandlerTodo={buttonListenHandler}/>)
            })}
        </ul>
    )
}
export default TodoList