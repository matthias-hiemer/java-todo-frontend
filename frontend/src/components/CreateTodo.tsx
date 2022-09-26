import axios from "axios";
import {ChangeEvent, useState} from "react";

type CreateTodoProps = {
    addTodo : (description: string) => void
}

export default function CreateTodo(props: CreateTodoProps){

    const [description, setDescription] = useState("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Change the description
        setDescription(event.target.value)
    }



    return (
        <div>
            <input onChange={onDescriptionChange} value={description} />
            <button onClick={() => props.addTodo(description)}>Add</button>
        </div>

    )

}