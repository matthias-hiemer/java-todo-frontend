import {ToDo} from "../model/Todo";
import "./ToDoCard.css"

type ToDoCardProps = {
    ToDoCard: ToDo;


}
export default function ToDoCard(props: ToDoCardProps) {

    return (

        <div>

            {props.ToDoCard.description}
            {props.ToDoCard.status}
        </div>
    )
}

