import React from 'react';
import { TodoIcon } from '../TodoIcon';

function DeleIcon({ onDelete }) {
	return <TodoIcon type="delete" onClick={onDelete} />;
}

export { DeleIcon };
