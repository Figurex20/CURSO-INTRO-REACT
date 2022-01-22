import React from 'react';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import logo from './logo.svg';
// import './App.css';

const todos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Tomar ek curso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
];

function App(props) {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todos) => (
					<TodoItem key={todos.text} text={todos.text} />
				))}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
