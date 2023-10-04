import React, { useEffect, useState } from 'react';
import TaskForm from '../../../components/TaskForm/TaskForm';
import { Container, FormContainer, Title } from './styles';

const TaskEdit = () => {
	const [id, setId] = useState(0);

	useEffect(() => {
		const pathArray = window.location.pathname.split('/');
		const id = pathArray[pathArray.length - 1];
		id > 0 ? setId(id) : setId(0);
	}, []);

	return (
		<Container>
			<Title>Editar Tarefa Existente</Title>

			<TaskForm id={id} />
		</Container>
	);
};

export default TaskEdit;
