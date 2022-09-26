import {ChangeEvent, useState} from "react"
import axios from "axios";



export default function CreateTodo(){

    const[description, setDescription] = useState("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const onAdd = ()=> {
        let newTodo = {
            description : description,
            status : "OPEN"
        }
        axios.post("/api/todo",)
    }

    return
        <div>

            <input onChange={onDescriptionChange}/>
            <button onClick={}>Add</button>
        </div>
}