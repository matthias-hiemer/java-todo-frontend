import {Todo} from "../model/Todo";


type TodoGalleryProps = {
    todos: Todo[];
    filterTodo: string;
}

export default function TodoGallery (props: TodoGalleryProps){

    return(
        <div>
            {props.todos.map(
                (todo) => {<p>
                    if(todo.description.toLowerCase().includes(props.filterTodo.toLowerCase())){
                        return( <TodoGallery TodoStatus = {todo}/>)}
                </p>}
            )}
        </div>

    )
}