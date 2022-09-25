import "./ToDoCard.css"
import {toDos} from "../model/ToDos";

type ToDoCardProps = {
    ToDoCard: toDos;
}

export default function ToDoCard (props: ToDoCardProps){

    return(
        <div className={"card"}>
                <h3>{props.ToDoCard.description}</h3>
                <p>{props.ToDoCard.status}</p>
        </div>

    )

}