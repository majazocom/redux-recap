const addJokes = (jokes) => {
    return {
        type: 'ADD_JOKES',
        payload: jokes
    }
}

export default addJokes;