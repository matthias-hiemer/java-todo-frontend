import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import CreateTodo from './component/CreateTodo';
import TodoCard from "./component/TodoCard";
import TodoOverview from './component/TodoOverview';
import { Todo } from './model/Todo';
import {TodoStatus} from "./model/TodoStatus";


    function App() {

        const [todos, setTodos] = useState<Todo>([]);

        useEffect(() => {
        axios.get("/api/todo")
            .then((response) => response.data)
            .then((todos) => setTodos(todos))

        }, [] )


        return (
            <div className="App">
                <header className="App-header">
                    <img src="https://i.pinimg.com/originals/45/c3/1f/45c31fb33fff0abd1879448dddc27d34.jpg" />
                    <TodoOverview todos={todos} filterTodo={} />
                    <CreateTodo />
                </header>

            </div>
        );
    }

    export default App;