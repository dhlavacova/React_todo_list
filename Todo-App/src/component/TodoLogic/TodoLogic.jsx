import InputTodo from "../InputTodo/InputTodo.jsx";
import TodoList from "../TodoList/TodoList.jsx";
import {useState,useEffect} from "react";

//hier speichern wir die Daten, deshalb hier die CRUD operatio (creat,read,update,delete)

const TodoLogic = () => {
    const [leerInput,setLeerInput] = useState('')
    const [myTask, setMyTask] = useState(()=> {
        const storageData=localStorage.getItem("myTodoList")
        return storageData?JSON.parse(storageData):[]});


    useEffect(()=>{
        localStorage.setItem("myTodoList", JSON.stringify(myTask))},[myTask])

    const deleteTodo = (idecko) => {
        const filterTask = [...myTask.filter((oneTask) => {
            return oneTask.id !== idecko;
        })]

        setMyTask(filterTask);
        console.log('delete task')
    }

    const addTodoItem = (title) => {
        console.log("addToDo Item in TodosLogic aufgerufen:", title);
        const neuTask={
            id:crypto.randomUUID(),
            title,
            complete:false
        }
        setMyTask((prev)=>[...prev,neuTask])
        console.log('klik')
    }

    return (
        <div className='logick'>
            <InputTodo addTodoItem={addTodoItem} setLeerInput={setLeerInput}/>
           <p>{leerInput}</p>
            <TodoList
                myTaskprops={myTask}
                setMyTaskprops={setMyTask}
                deleteTodo={deleteTodo}/>
        </div>
    )
}
export default TodoLogic
