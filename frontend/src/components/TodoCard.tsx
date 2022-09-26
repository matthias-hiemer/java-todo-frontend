import {Todo} from "../../Todo";
import "./TodoCard.css"

type TodoCardProps = {
    todo : Todo;
    deleteTodo : (id: string) => void; // Type ist: Eine Methode, die einen String als Parameter hat und void als return
}

export default function TodoCard(props : TodoCardProps){

    return (
        <div className={"todo-card"}>
            <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
            <p> ({props.todo.status}) {props.todo.description} </p>
        </div>
    )
}