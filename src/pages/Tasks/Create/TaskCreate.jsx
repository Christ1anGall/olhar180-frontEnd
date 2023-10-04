import React from 'react';
import TaskForm from '../../../components/TaskForm/TaskForm';
import { TaskCreateContainer } from './style';

const TaskCreate = () => {
	return (
		<TaskCreateContainer>
			<h1>Criar Nova Tarefa</h1>
			<TaskForm id={0} />
		</TaskCreateContainer>
	);
};

export default TaskCreate;
