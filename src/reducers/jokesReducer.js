let initialState = {
    jokes: []
}

const jokesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_JOKES':
            return {
                jokes: action.payload
            }
            default: return state;
    }
}

export default jokesReducer;