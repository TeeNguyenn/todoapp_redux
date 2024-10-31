// const initState = {
//     search: '',
//     status: 'All',
//     priorities: [],
// };

import { createSlice } from '@reduxjs/toolkit';

// const filtersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload,
//             };
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload,
//             };
//         case 'filters/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload,
//             };
//         default:
//             return state; // run lan dau tien tra ve init state
//     }
// };

// export default filtersReducer;

// redux toolkit

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // mutation: thay doi truc tiep state - code mutation nhung thuc chat la immutation
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            // mutation: thay doi truc tiep state - code mutation nhung thuc chat la immutation
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            // mutation: thay doi truc tiep state - code mutation nhung thuc chat la immutation
            state.priorities = action.payload;
        },
    },
});
