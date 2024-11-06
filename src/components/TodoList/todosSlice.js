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
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todoList',
    initialState: { status: 'idle', todos: [] },
    // reducers: {
    //     addTodo: (state, action) => {
    //         state.push(action.payload);
    //     }, // action creators
    //     todoCompleteChange: (state, action) => {
    //         const currentTodo = state.find(
    //             (todo) => todo.id === action.payload
    //         ); //{...}
    //         if (currentTodo) currentTodo.completed = !currentTodo.completed;
    //     }, // action creators
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = 'idle'; //ranh
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.todos = state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                );
            });
    },
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data.todos;
});

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async (newTodo) => {
        const res = await fetch('api/todos', {
            method: 'POST',
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        return data.todos;
    }
);

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (updateTodo) => {
        const res = await fetch('api/updateTodo', {
            method: 'POST',
            body: JSON.stringify(updateTodo),
        });
        const data = await res.json();
        return data.todos;
    }
);

export default todosSlice;

//thunk action creator
// export function addTodos(todo) {
//     return function addTodosThunk(dispatch, getState) {
//         todo.name = 'Tee dev';
//         dispatch(todosSlice.actions.addTodo(todo));
//     }; //thunk action
// }
