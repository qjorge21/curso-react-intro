import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import './App.css';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  completeTodo,
  deleteTodo,
  message,
  todosBuscados
}) {
  return (
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
        message={message}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {loading && <p>Estamos cargando</p>}
        {error && <p>Huno un error!</p>}
        {(!loading && todosBuscados.length == 0) && <p>Crea tu primer TODO!</p>}

        {todosBuscados.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            // se coloca asi para que react solo pase el parametro cuando sucede el evento y no siempre (infinite loops)
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export {AppUI};
