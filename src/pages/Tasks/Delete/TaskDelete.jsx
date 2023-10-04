import React, { useEffect, useState } from 'react';
import TaskDeleteConfirm from '../../../components/TaskDeleteConfirm/TaskDeleteConfirm';
import { deleteTask } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const TaskDelete = () => {
	const [id, setId] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const pathArray = window.location.pathname.split('/');
		const id = pathArray[pathArray.length - 1];
		id > 0 ? setId(id) : setId(0);
	}, []);

	const handleDeleteConfirm = async () => {
		try {
			await deleteTask(id);
		} finally {
			navigate('/');
		}
	};

	const handleCancel = () => {
		navigate('/');
	};

	return (
		<div>
			<h1>Excluir Tarefa</h1>
			<TaskDeleteConfirm
				onConfirm={handleDeleteConfirm}
				onCancel={handleCancel}
			/>
		</div>
	);
};

export default TaskDelete;
