export default initialState => reducerMap => (state = initialState, action) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action) : state;
};

// createReducer = (initialState) => {
//     return reducerMap => {
//         return (state, action) => {
//             const reducer = reducerMap[action.type]
//             return reducer ? reducer(state, action) : state
//         }
//     }
// }
