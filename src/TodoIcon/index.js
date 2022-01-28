// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiInputCheckedOutline } from 'react-icons/ti';
import './TodoIcon.css';

const iconTypes = {
	check: (color) => (
		<TiInputCheckedOutline className="Icon-svg Icon-svg--check" fill={color} />
	),
	delete: (color) => (
		<TiDelete className="Icon-svg Icon-svg--delete" fill={color} />
	),
};

function TodoIcon({ type, color = 'gray', onClick }) {
	return (
		<span
			className={`Icon-container Icon-container--${type}`}
			onClick={onClick}
		>
			{iconTypes[type](color)}
		</span>
	);
}

export { TodoIcon };
