import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	const onCancel = () => {
		setOpenModal(false);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (newTodoValue.length <= 0) return;
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	const onKeyUp = (e) => {
		if (e.charCode === 13) {
			e.preventDefault();
			if (newTodoValue.length <= 0) return;
			addTodo(newTodoValue);
			onCancel();
		}
	};
	return (
		<form onSubmit={onSubmit} onKeyPress={onKeyUp}>
			<label>Escribe tu nuevo To Do</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder="Cortar la cebolla oara el almuerzo"
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					className="TodoForm-button TodoForm-button--cancel"
					onClick={onCancel}
				>
					Cancelar
				</button>

				<button className="TodoForm-button TodoForm-button--add" type="submit">
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
