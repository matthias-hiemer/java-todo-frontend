import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";


type TodoOverviewProps = {
    todos: Todo[];
    filterTodo: string;
}

export default function TodoOverview (props: TodoOverviewProps){

    return(
        <div>
            {props.todos.map(
                (todo) => <TodoCard todo={todo}/>)
                    }
                }
            )}
        </div>

    )
}