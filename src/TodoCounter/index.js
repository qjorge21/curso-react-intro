import './TodoCounter.css';

function TodoCounter({message}){
    return (
        <h1 className="TodoCounter">{message}</h1>
    );
}

export {TodoCounter};