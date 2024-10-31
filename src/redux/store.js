// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // config follow redux in devtool
// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers); //  3 params: reducer, initialValue, enhancers

// export default store;

// redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filterSlice';
import todoListReducer from '../components/TodoList/todosSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListReducer.reducer,
    },
});

export default store;
