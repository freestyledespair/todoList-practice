import React from 'react';
import { Input } from 'antd';

const Form = ({ toDos, setToDos, name, setName, addTodo }) => {

    console.log(name);
    console.log(toDos);
    const noAddTodo = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={name !== '' ? addTodo : (event) => noAddTodo(event)}>
                <Input style={{ width: "200px", height: "40px", background: "orange" }} value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Write task' />

                {/* <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Write list' /> */}
                <button>Add to list</button>
            </form>
        </div>
    );
};

export default Form;