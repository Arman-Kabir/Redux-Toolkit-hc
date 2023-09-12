import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    // const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();

        // dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <p className='text-3xl'>Hello</p>
            <form className=''>
                <input type="text" className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500' name="" id="" />

                <button className='text-white bg-indigo-500'>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo;