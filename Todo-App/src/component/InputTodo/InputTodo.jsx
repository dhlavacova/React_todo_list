import styles from './inputTodo.module.scss'
//import todoList from "./TodoList.jsx";
import {useState}from "react";

const InputTodo = ({addTodoItem,setLeerInput}) => {
    const [title,setTitle] =useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        if(title!==''){
            addTodoItem(title.trim())
            setLeerInput('')
            setTitle('')
        }
        else{
           setLeerInput('schreib bitte ein text')
        }

    }

    const handleChange=(e)=>{
       setTitle(e.target.value)
    }
    return (
        <form >
            <input id={styles.input}
                   type='text'
                   placeholder='Add todo...'
                   value={title}
                   onChange={handleChange}/>
            <input id={styles.button} type="submit" value="⤵" onClick={submitHandler}/>

        </form>
    )
}
export default InputTodo