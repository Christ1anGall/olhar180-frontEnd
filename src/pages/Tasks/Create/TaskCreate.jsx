import React from 'react';
import TaskForm from '../../../components/TaskForm/TaskForm';
import { TaskCreateContainer, Title } from './style';

const TaskCreate = () => {
	return (
		<TaskCreateContainer>
			<Title>Criar Nova Tarefa</Title>
			<TaskForm id={0} />
		</TaskCreateContainer>
	);
};

export default TaskCreate;
