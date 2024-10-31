// const initState = [
//     {
//         id: 1,
//         name: 'Learn Redux',
//         completed: false,
//         priority: 'Medium',
//     },
//     {
//         id: 2,
//         name: 'Learn React',
//         completed: true,
//         priority: 'High',
//     },
//     {
//         id: 3,
//         name: 'Learn TypeScript',
//         completed: false,
//         priority: 'Low',
//     },
// ];

import { createSlice } from '@reduxjs/toolkit';

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload];
//         case 'todoList/todoCompleteChange': {
//             return state.map((todo) =>
//                 todo.id === action.payload
//                     ? {
//                           id: todo.id,
//                           name: todo.name,
//                           completed: !todo.completed,
//                           priority: todo.priority,
//                       }
//                     : todo
//             );
//         }

//         default:
//             return state; // run lan dau tien tra ve init state
//     }
// };

// export default todoListReducer;

// redux toolkit

export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            name: 'Learn Redux',
            completed: false,
            priority: 'Medium',
        },
        {
            id: 2,
            name: 'Learn React',
            completed: true,
            priority: 'High',
        },
        {
            id: 3,
            name: 'Learn TypeScript',
            completed: false,
            priority: 'Low',
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }, // action creators
        todoCompleteChange: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            ); //{...}
            if (currentTodo) currentTodo.completed = !currentTodo.completed;
        }, // action creators
    },
});
