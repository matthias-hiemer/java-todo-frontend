import {ToDo} from "../model/Todo";
import ToDoCard from "./ToDoCard";

type ToDoBoardProps = {
    toDos: ToDo[];
}

export default function ToDoBoard(props: ToDoBoardProps) {

    return (
        <div className={"ToDoBoard"}>
            {props.toDos.map(
                (toDo) => {
                    return (<ToDoCard ToDoCard={toDo}/>)
                })}
        </div>)
}