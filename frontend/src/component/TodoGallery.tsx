import {Todo} from "../model/Todo";


type TodoElementProps = {
    todos: Todo[];
    filterTodo: string;
}

export default function TodoElement (props: TodoElementProps){

    return(
        <div>
            {props.todos.map(
                (todo) => {
                    if(todo.description.toLowerCase().includes(props.filterTodo.toLowerCase())){
                        return( <TodoElement TodoStatus = {todo}/>)}
                }
            )}
        </div>

    )
}