import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "../Todo";
import axios from "axios";
import TodoOverview from './components/TodoOverview';
import CreateTodo from "./components/CreateTodo";

function App() {

  // Creates a state "todos" and gives us a method to change/set it
  const [todos, setTodos] = useState([]);

    // Load Todos from backend
  useEffect ( () => {
      getTodos()

  } , [] ) // empty dependency array = execute only when website was rendered the first time

    const getTodos = () => {
        axios.get("/api/todo")
            .then((response) => response.data)
            .then((todos) => setTodos(todos))
    }

    const addTodo = (description: string) => {
        let newTodo = {
            description : description,
            status : "OPEN"
        }

        // We use .then here to reload the todos only when the get is done
        axios.post("/api/todo", newTodo)
            .then(getTodos) // reload todos from backend
    }




  return (
    <div className="App">
      <header className="App-header">

        <h1>Todos</h1>

        <TodoOverview todos={todos} />
        <CreateTodo addTodo={addTodo} />

      </header>
    </div>
  );
}

export default App;
