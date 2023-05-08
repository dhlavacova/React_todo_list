import './inputTodo.scss'
import todoList from "./TodoList.jsx";
const InputTodo =()=>{
    const neuTodoHandler=()=>{


        console.log('klik')
    }
    return(
        <div>
            <input id='input' type='text' placeholder='Add todo...'/>
            <input id="button" type="submit" value="⤵"onClick={neuTodoHandler}/>
        </div>
    )
}
export default InputTodo