export const initialState = null;
export const reducer = (state, action) => {
    if(action.type === 'STUDENT'){
        return action.payload;
    }
    if(action.type === 'ADMIN'){
        return action.payload;
    }
    return state;
}