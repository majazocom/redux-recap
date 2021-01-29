import { useDispatch } from 'react-redux';
import addJokes from '../actions/addJokes';

function GetJokes() {

    const dispatch = useDispatch();

    async function handleClick() {
        const response = await fetch('https://official-joke-api.appspot.com/random_ten');
        const data = await response.json();
        console.log(data);

        dispatch(addJokes(data));
    }

    return (
        <section>
            <button onClick={handleClick}>Get jokes</button>
        </section>
    )
}

export default GetJokes;