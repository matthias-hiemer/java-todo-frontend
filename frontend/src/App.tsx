import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import TodoElement from "./component/TodoElement";
import TodoGallery from './component/TodoGallery';
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
                    <TodoGallery todos={todos} filterTodo={} />
                </header>

            </div>
        );
    }

    export default App;