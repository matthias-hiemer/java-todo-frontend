import {Todo} from "../../Todo";
import "./TodoCard.css"

type TodoCardProps = {
    todo : Todo;
}

export default function TodoCard(props : TodoCardProps){

    return (
        <div className={"todo-card"}>
            <p> ({props.todo.status}) {props.todo.description} </p>
        </div>
    )
}