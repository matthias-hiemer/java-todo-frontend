import {Todo} from "../../Todo";
import TodoCard from "./TodoCard";


type TodoOverviewProps = {
    todos : Todo[];
    deleteTodo : (id: string) => void;
}

export default function TodoOverview(props : TodoOverviewProps){


    return (
        <div>
            {props.todos.map((todo) =>
                <TodoCard todo={todo} deleteTodo={props.deleteTodo} /> ) }
        </div>
    )

}