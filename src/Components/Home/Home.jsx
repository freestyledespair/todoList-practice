import React, { useState } from 'react';
import Form from '../Form/Form'
import Output from '../Output/Output';
import './home.css'

const Home = () => {
    const [toDos, setToDos] = useState([])
    // const todos = []
    // const setTodos = () => {
    //     todos = ''
    // }
    const [name, setName] = useState('')
    const addTodo = (event) => {
        event.preventDefault()
        const toDo = {
            name,
            id: toDos.length + 1,
            status: false,
        }
        setToDos([...toDos, toDo])
        setName('')
    }
    const taskCheck = (id) => {
        toDos.map(el => {
            if (el.id === id) {
                el.status = !el.status
            } setToDos([...toDos])
        })
    }
    const taskDelete = (id) => {
        setToDos(toDos.filter(el => el.id !== id))
    }
    return (
        <div>
            <Form
                toDos={toDos}
                setToDos={setToDos}
                name={name}
                setName={setName}
                addTodo={addTodo} />
            <Output toDos={toDos} taskCheck={taskCheck} taskDelete={taskDelete} />
        </div>
    );
};

export default Home;