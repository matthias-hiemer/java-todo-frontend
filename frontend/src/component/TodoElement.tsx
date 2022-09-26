import "./ToDoCard.css"
import {Todo} from "../model/Todo";

type TodoElementProps = {
    TodoElement: Todo;
}


export default function TodoElement (props: TodoElementProps){


    return(
        <div className={"gallery"}>
            <div className={"td-gallery"}>
                <h3>{props.TodoElement.description}</h3>
                <p>{props.TodoElement.status}</p>
            </div>
        </div>

    )

}