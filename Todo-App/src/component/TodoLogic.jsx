import InputTodo from "./InputTodo.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";


const TodoLogic=()=>{
    const make=[
        {id:1 ,title:'zahne putzen', complete:false},
        {id:2 ,title:'kuchen backen', complete:true},
        {id:3 ,title:'blumen gießen', complete:true}
    ]

    return (
        <div>
            <InputTodo/>
            <TodoList MyProps={make}/>
        </div>
    )
}
export default TodoLogic
