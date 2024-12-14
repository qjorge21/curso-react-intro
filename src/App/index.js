import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

/* const defaulTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALA', completed: true},
  { text: 'Usar estados derivados', completed: true}
] */
// const stringifiedTodos = JSON.stringify(defaulTodos)
//localStorage.setItem('TODOS_V1', stringifiedTodos);
//localStorage.removeItem('TODOS_V1');

// COMPONENTE

function App() {
   const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // estado para search
  const [searchValue, setSearchValue] = React.useState('');

  // obtener cant todos completados y total
  const completedTodos = todos.filter( todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let message = "Haz completado "+completedTodos+" de "+totalTodos;

  if (completedTodos === totalTodos) {
    message = "Felicidades! Completaste todos los TODOS!";
  }

  // filtro los todos que matcheen con lo buscado
  const todosBuscados = todos.filter(
    todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    // creo una copia de todos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    // creo una copia de todos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    message={message}
    todosBuscados={todosBuscados}
    />
  )
}

export default App;