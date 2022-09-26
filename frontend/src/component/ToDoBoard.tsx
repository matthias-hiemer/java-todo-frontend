import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";

type ToDoBoardProps = {
    toDos:  ToDo[];
    filterToDo: string;
}

export default function ToDoBoard (props: ToDoBoardProps){

    return(
        <div className={"cards"}>
            {props.toDos.map(
                (toDo)=>{
                    if(toDo.description.toLowerCase().includes(props.filterToDo.toLowerCase())){
                        return( <ToDoCard ToDoCard = {toDo}/>)}
                }
            )}
        </div>

    )

}