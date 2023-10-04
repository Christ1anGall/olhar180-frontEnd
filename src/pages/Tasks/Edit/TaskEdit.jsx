import React, { useEffect, useState } from 'react';
import TaskForm from '../../../components/TaskForm/TaskForm';

const TaskEdit = () => {
	const [id, setId] = useState(0);

	
	useEffect(() => {
		const pathArray = window.location.pathname.split('/');
		const id = pathArray[pathArray.length - 1];
		id > 0 ? setId(id) : setId(0);
	}, []);

	return (
		<div>
			<h1>Editar Tarefa Existente</h1>
			<TaskForm id={id} />
		</div>
	);
};

export default TaskEdit;
