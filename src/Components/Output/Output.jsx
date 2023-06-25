import React from 'react';
import "./output.css"

const Output = ({ toDos, taskCheck, taskDelete }) => {

    return (
        <div>
            {
                // toDos.length=null &&
                toDos?.map(el => (
                    <div key={el.id}>
                        <p>
                            <h1>{el.name}</h1>
                        </p>
                        <p>{el.status ? <h2 className='done'>done</h2> : <h2 className='in-process'>in process</h2>}</p>
                        <button onClick={() => taskCheck(el.id)}>Change Status</button>
                        <button onClick={() => taskDelete(el.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Output;