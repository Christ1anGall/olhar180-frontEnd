import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL =
	'https://task-manager-olhar180-b53de4666cea.herokuapp.com/tasks';

const API_BASE_URL_LOGIN =
	'https://task-manager-olhar180-b53de4666cea.herokuapp.com/auth';

const api = axios.create({
	baseURL: API_BASE_URL,
	timeout: 5000,
});

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export const handleLogin = async (loginData, closeLoginModal) => {
	try {
		const response = await api.post(`${API_BASE_URL_LOGIN}/signin`, {
			email: loginData.email,
			password: loginData.password,
		});
		localStorage.setItem('token', response.data.access_token);
		toast.success('Bem Vindo');
	} catch ({ response }) {
		toast.error('Erro ao fazer login, já se cadastrou ?');
	}
};

export const handleSignup = async (signupData, closeSignupModal) => {
	try {
		await api.post(`${API_BASE_URL_LOGIN}/signup`, {
			name: signupData.name,
			email: signupData.email,
			password: signupData.password,
			passwordConfirmation: signupData.passwordConfirmation,
		});
		toast.success('é um prazer temos você conosco!!');
	} catch ({ response }) {
		toast.error(`Erro ao criar usuário: ${response.data.message}`);
	}
};

export const fetchTasks = async () => {
	const response = await api.get(API_BASE_URL);
	return response.data;
};

export const createTask = async (newTask) => {
	try {
		const response = await api.post(API_BASE_URL, newTask);
		toast.success('Task Criada!!');
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchTaskById = async (taskId) => {
	try {
		const response = await api.get(`${API_BASE_URL}/${taskId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateTask = async (task) => {
	const { priority, completionDate, description, title } = task;

	try {
		const response = await api.patch(`${API_BASE_URL}/${task.id}`, {
			priority,
			completionDate,
			description,
			title,
		});
		toast.success('Task Atualizada!!');
		return response.data;
	} catch ({ response }) {
		toast.error(`Error: ${response.data.message}, try to log in `);
		throw response;
	}
};

export const doneTask = async (taskId, updatedTask) => {
	try {
		const response = await api.patch(`${API_BASE_URL}/${taskId}`, {
			concluded: updatedTask,
		});
		console.log(updateTask);
		updatedTask
			? toast.success('Task Concluida!!')
			: toast.info('Task Incompleta!!');
		return response.data;
	} catch ({ response }) {
		toast.error(`Error: ${response.data.message}, try to log in `);
		throw response;
	}
};

export const deleteTask = async (taskId) => {
	try {
		await api.delete(`${API_BASE_URL}/${taskId}`);
		toast.success('Task Apagada!!');
	} catch ({ response }) {
		toast.error(`Error: ${response.data.message}, try to log in `);
		throw response;
	}
};
