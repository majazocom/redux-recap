import React from 'react';
import { useSelector } from 'react-redux';

function ShowJokes() {
    const jokes = useSelector((state) => {return state.jokes})

    return(
        <section>
            {jokes.map((joke) => {
                return <p>{joke.setup} - {joke.punchline}</p>
            })}
        </section>
    )
}

export default ShowJokes;