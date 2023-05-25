import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";

const TodoDetail = () => {

const [tododata, setTodoData]=useState({})


    // dynmaischen Parameter, der in der URL übergeben wurde,
    // soll "ausgelesen" werden
    const { id } = useParams();
    // URL: ".../todo/5" => id = 5
    // URL: ".../todo/34234-sdfsdf-234d-dd" => id = 34234-sdfsdf-234d-dd


    const url = `https://tiny-house-helden.de/api/todo.php?id=${id}`;
    // wegen CORS brauchen wir einen proxy
    const proxyUrl = 'https://corsproxy.io/?' + url;

    const getTodo = async () => {

        const response = await fetch(proxyUrl);
        const data = await response.json();
        console.log(data)
        setTodoData(data)


    }


    useEffect(() => {
         getTodo()}, [])

console.log(tododata.details)


    return (
        <div>
            <h1>Mein Todo </h1>

            <p>Todo Titel: {tododata.title} - {id} </p>
            <p>Todo Beschreibung: {tododata.details} </p>
        </div>
    )
};

export default TodoDetail;







