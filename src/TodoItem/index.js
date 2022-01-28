import React from 'react';
import { CompleteIcon } from '../CompleteIcon';
import { DeleIcon } from '../DeleIcon';
import './TodoItem.css';

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<CompleteIcon completed={props.completed} onComplete={props.onComplete} />

			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
				{props.text}
			</p>

			<DeleIcon onDelete={props.onDelete} />
		</li>
	);
}

export { TodoItem };
