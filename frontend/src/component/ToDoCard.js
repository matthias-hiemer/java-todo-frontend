export default function ToDoCard(props){
    return  <section className={"ToDoCard"}>
        <p>{props.toDo.description}</p>
        <button onClick={() => props.changeStatus(props.toDo)}>advanced</button>
    </section>
}