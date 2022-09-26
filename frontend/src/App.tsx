import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "../Todo";
import axios from "axios";
import TodoOverview from './components/TodoOverview';

function App() {

  // Creates a state "todos" and gives us a method to change/set it
  const [todos, setTodos] = useState([]);

  // Load Todos from backend
  useEffect ( () => {
      axios.get("/api/todo")
          .then((response) => response.data)
          .then((todos) => setTodos(todos))

  } , [] ) // empty dependency array = execute only when website was rendered the first time




  return (
    <div className="App">
      <header className="App-header">

        <h1>Todos</h1>

        <TodoOverview todos={todos} />

      </header>
    </div>
  );
}

export default App;
