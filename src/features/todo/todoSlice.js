import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDO: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        }
    }
});

export const {addToDO,removeTodo} = todoSlice.actions;

export default todoSlice.reducer