

export default function ToDoBoard(props){
    return <section className={Board}>
        <h6>ToDo</h6>
        {props.toDos.map(toDo => <ToDoCard toDo={toDo} key={toDo.id} changeStatus={props.changeStatus}/>)}


    </section>
}