import TodoItem from "./TodoItem.jsx";
import "./todoList.scss"
import {useState} from "react";
//import React from "react"

const TodoList = (props) => {
    const [myTask, setMyTask] = useState(props.MyProps);

    const buttonListenHandler = (idecko) => {
        const filterTask = myTask.filter((oneTask) => {
            return oneTask.id !== idecko;
        })
        setMyTask((prevfilterTask)=>filterTask)
        console.log('delete task')
    }

    const ImFertigHandler = (idecko) =>{
        console.log('klik')
      const valid= myTask.map((el)=>{
            if(el.id ===idecko) {
                return (el.complete?el.complete=false:el.complete=true)
            }
        })
      setMyTask(valid)
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
                    buttonImFertigHandler={ImFertigHandler}
                    buttonListenHandlerTodo={buttonListenHandler}/>)
            })}
        </ul>
    )
}
export default TodoList