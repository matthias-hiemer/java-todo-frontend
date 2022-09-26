import {ToDo, TODO_STATUS} from "../model/ToDo";
import "./ToDoCard.css"
import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";


type ToDoCardProps = {
    ToDoCard: ToDo;
}

export default function ToDoCard (props: ToDoCardProps){

    function deleteToDo(id:string) {
        axios.delete(`/api/todo/${id}`)
            .then((response)=>{return response.data});
        window.location.reload();
    }
    const [isChecked, setIsChecked] = useState<boolean>(false);

    function changeToDo2Done(description:string, id:string){
        let text = document.getElementById(id) as HTMLInputElement;
        if(!isChecked){
            text.style.color = "gray";
            text.style.opacity="0.5";
            text.style.textDecoration="line-through";

            axios.put(`/api/todo/${id}`,
                {description: description,
                    status: TODO_STATUS.DONE,
                    id:id}
            )
                .then((response) => {return response.data; console.log(response)})
                .catch((error) => {console.error(error)})
        }else{
            text.style.color="black";
            text.style.opacity="1";
            text.style.textDecoration="";

            axios.put(`/api/todo/${id}`,
                {description: description,
                    status: TODO_STATUS.OPEN,
                    id:id}
            )
                .then((response) => {return response.data; console.log(response)})
                .catch((error) => {console.error(error)})

        }

    }



    return(
        <div className={"card"}>

            <input className={"cb-done"} type="checkbox" onChange={(event)=>setIsChecked(event.target.checked)}
                   onClick={()=>changeToDo2Done(props.ToDoCard.description, props.ToDoCard.id)}/>

            <h3 id={props.ToDoCard.id}>To-Do: {props.ToDoCard.description}</h3>


            <span>
                    <button className={"del-btn"} onClick={()=>deleteToDo(props.ToDoCard.id)}>Delete</button>
                </span>
            {/*<p>Status: {props.ToDoCard.status}</p>*/}


        </div>

    )

}