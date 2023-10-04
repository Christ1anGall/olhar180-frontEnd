import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import TaskCreate from '../pages/Tasks/Create/TaskCreate';
import TaskEdit from '../pages/Tasks/Edit/TaskEdit';
import TaskDelete from '../pages/Tasks/Delete/TaskDelete';

const MainRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/criar-tarefa'
					element={<TaskCreate />}
				/>
				<Route
					path='/editar-tarefa/:taskId'
					element={<TaskEdit />}
				/>
				<Route
					path='/excluir-tarefa/:taskId'
					element={<TaskDelete />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
