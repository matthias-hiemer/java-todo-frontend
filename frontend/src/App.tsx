import React, {SyntheticEvent, useEffect, useState} from 'react';
import './App.css';
import ToDoBoard from "./component/ToDoBoard";
import axios from "axios";
import {TODO_STATUS} from "./model/ToDo";


function App() {

    const [toDos, setToDos] = useState([]);
    const [filterToDo, setFilterToDo] = useState("");
    const [newToDo, setNewToDo] = useState("");
    const [checked, setChecked] = useState(true);

    useEffect(()=>{
        axios.get("/api/todo")
            .then((response) => {return response.data})
            .then((toDos)=> {setToDos(toDos)})
            .catch((error) => {console.error(error)})
    }, [])

    function addToDo(newToDo: string) {
        axios.post('/api/todo', {
            description: newToDo,
            status: TODO_STATUS.OPEN,
        })
            .then((response) => {
                setToDos(toDos);
            });
    }

    const handleSubmit = () =>{
        window.location.reload();
        addToDo(newToDo);
    }

    const handleChange = () =>{

        setChecked(!checked);
        if(checked) {
            console.log(!checked)
            axios.get("/api/todo/done")
                .then((response) => {return response.data})
                .then((toDos)=> {setToDos(toDos)})
                .catch((error) => {console.error(error)})

        }else{
            axios.get("/api/todo")
                .then((response) => {return response.data})
                .then((toDos)=> {setToDos(toDos)})
                .catch((error) => {console.error(error)})
        }
        //
    }

    return (
        <header className={"Header"}>
            <div className={"title"}>
                <h1>To Do Kanban</h1>
            </div>
            {/*Search-Card*/}
            <div className={"search-card"}>
                <div className={"search-text"}>
                    <input onChange={(event) => setFilterToDo(event.target.value)}/>
                </div>
                <div className={"cb-show-dones"}>
                    <label>
                        <input type={"checkbox"} onChange={() =>
                            handleChange()}/>
                        Show completed todos
                    </label>
                </div>
            </div>
            <div className="todo-table">
                <ToDoBoard toDos = {toDos} filterToDo = {filterToDo}/>
            </div>
            {/*Add-Card*/}
            <div className={"add-card"}>
              <span className={"add-text"}>
                  <input onChange={(event)=>setNewToDo(event.target.value)}/>
              </span>
                <span className={"add-btn"}>
                  <button onClick={handleSubmit}>Add</button>
              </span>
            </div>
        </header>
    );
}

export default App;