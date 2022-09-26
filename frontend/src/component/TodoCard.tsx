import "./TodoCard.css"
import {Todo} from "../model/Todo";

type TodoCardProps = {
        todos: Todo[];
}


export default function TodoCard (props: TodoCardProps){


    return(
        <div className={"todoCard"}>
            <p>{props.todo.status} {props.tod.description}</p>
        </div>

    )

}