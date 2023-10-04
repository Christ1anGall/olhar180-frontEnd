import React from 'react';
import {
	TaskInfo,
	divDelTask,
	TaskEstimated,
	TaskItemWrapper,
	TaskListWrapper,
	TaskTitle,
	TaskDescription,
	TaskFooter,
	TaskPriority,
	CheckboxContainer,
	HiddenCheckbox,
	CustomCheckbox,
} from './style';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const TaskList = ({ tasks, onTaskClick, onTaskDone, onTaskDelete }) => {
	const handleCheckboxChange = (task) => {
		onTaskDone(task);
	};

	return (
		<TaskListWrapper>
			{tasks.map((task) => (
				<TaskItemWrapper key={task.id}>
					<TaskInfo onClick={() => onTaskClick(task)}>
						<TaskTitle>{task.title}</TaskTitle>
						<TaskDescription>{task.description}</TaskDescription>
						<TaskEstimated>
							prazo:{' '}
							{format(new Date(task.completionDate), 'dd/MM/yyyy', {
								locale: ptBR,
							})}
						</TaskEstimated>
					</TaskInfo>
					<TaskFooter>
						<CheckboxContainer>
							<HiddenCheckbox
								checked={task.concluded}
								onChange={() => handleCheckboxChange(task)}
							/>
							<CustomCheckbox checked={task.concluded} />
						</CheckboxContainer>
						<TaskPriority priority={task.priority}>
							{task.priority}
						</TaskPriority>
						<divDelTask onClick={() => onTaskDelete(task)}>delete</divDelTask>
					</TaskFooter>
				</TaskItemWrapper>
			))}
		</TaskListWrapper>
	);
};

export default TaskList;
