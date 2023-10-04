import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createTask, fetchTaskById, updateTask } from '../../services/api';
import {
	ErrorMessage,
	FieldContainer,
	FormContainer,
	SelectField,
} from './style';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/style';
import { InputField } from '../Input/style';

const schema = yup.object().shape({
	title: yup.string().required('Título é obrigatório'),
	description: yup.string().required('Descrição é obrigatória'),
	completionDate: yup.date().required('Selecione uma data'),
	priority: yup.string().oneOf(['baixa', 'media', 'alta']).required(),
});

const TaskForm = ({ id }) => {
	const [taskData, setTaskData] = useState({
		title: '',
		description: '',
		completionDate: '',
		priority: '',
		concluded: false,
	});

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			if (id > 0) {
				const taskDataFromApi = fetchTaskById(id);
				const { title, description, completionDate, priority, concluded } =
					taskDataFromApi;
				setTaskData({
					title,
					description,
					completionDate,
					priority,
					concluded,
				});
			}
		};
		fetchData();
	}, [id]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		if (id === 0) {
			createTask(data);
		} else {
			data.id = parseInt(id, 10);
			updateTask(data);
		}
	};

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<FieldContainer>
				<InputField
					defaultValue={taskData.title}
					{...register('title', { required: true })}
					type='text'
					placeholder='Título'
				/>
				{errors?.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
			</FieldContainer>
			<FieldContainer>
				<InputField
					defaultValue={taskData.description}
					{...register('description', { required: true })}
					type='text'
					placeholder='Descrição'
				/>
				{errors?.description && (
					<ErrorMessage>{errors.description.message}</ErrorMessage>
				)}
			</FieldContainer>
			<FieldContainer>
				<InputField
					defaultValue={taskData.completionDate}
					{...register('completionDate', { required: true })}
					type='date'
					placeholder='Data de Conclusão'
				/>
				{errors?.completionDate && (
					<ErrorMessage>{errors.completionDate.message}</ErrorMessage>
				)}
			</FieldContainer>
			<FieldContainer>
				<SelectField
					defaultValue={taskData.priority}
					{...register('priority')}
					placeholder='Prioridade'>
					<option value='baixa'>Baixa</option>
					<option value='media'>Média</option>
					<option value='alta'>Alta</option>
				</SelectField>
				{errors?.priority && (
					<ErrorMessage>{errors.priority.message}</ErrorMessage>
				)}
			</FieldContainer>

			<Button type='submit'>Salvar</Button>
			<Button onClick={() => navigate('/')}>Voltar</Button>
		</FormContainer>
	);
};

export default TaskForm;
