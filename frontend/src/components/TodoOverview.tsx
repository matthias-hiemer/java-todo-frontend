import {Todo} from "../../Todo";


type TodoOverviewProps = {
    todos : Todo[];
}

export default function TodoOverview(props : TodoOverviewProps){


    return (
        <div>
            {props.todos.map((todo) => <p> {todo.description} </p> ) }
        </div>
    )

}