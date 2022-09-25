import {toDos} from "../model/ToDos";
import ToDoCard from "./ToDoCard";

type ToDoBoardProps = {
    toDos: toDos[];
    filterToDo: string;
}

export default function ToDoBoard (props: ToDoBoardProps){

    return(
        <div>
            {props.toDos.map(
                (toDo)=>{
                    if(toDo.description.toLowerCase().includes(props.filterToDo.toLowerCase())){
                        return( <ToDoCard ToDoCard = {toDo}/>)}
                }
            )}
        </div>

    )

}