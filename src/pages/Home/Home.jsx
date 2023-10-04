import { useEffect, useState } from 'react';
import { doneTask, fetchTasks } from '../../services/api';
import {
	HomeCheckboxContainer,
	HomeContainer,
	HomeFilter,
	StyledH1,
	TaskListContainer,
} from './styles';
import NavigationBar from '../../components/NavBar/NavBar';
import TaskList from '../../components/TaskList/TaskList';
import MediaQuery from 'react-responsive';
import AddTaskButton from '../../components/AddTaskButton/AddTaskButton';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [tasks, setTasks] = useState([]);
	const [Reender, setReender] = useState(false);

	const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);

	const handleShowIncompleteChange = () => {
		setShowIncompleteOnly(!showIncompleteOnly);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchTasks();
				const sortedTasks = data.sort((a, b) => a.id - b.id);
				setTasks(sortedTasks);
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		};

		fetchData();
	}, [Reender]);

	const handleTaskId = (task) => {
		navigate(`/editar-tarefa/${task.id}`);
	};

	const handleTaskDone = async (task) => {
		await doneTask(task.id, !task.concluded);
		setReender((old) => !old);
	};

	const handleTaskDelete = (task) => {
		navigate(`/excluir-tarefa/${task.id}`);
		setReender((old) => !old);
	};

	const filteredTasks = tasks.filter(
		(task) => !showIncompleteOnly || !task.concluded
	);

	return (
		<HomeContainer>
			<NavigationBar />
			<StyledH1>Taks List</StyledH1>
			{tasks.length > 0 && (
				<HomeCheckboxContainer>
					<HomeFilter onClick={handleShowIncompleteChange}>
						{!showIncompleteOnly
							? 'Show only Incomplete Tasks'
							: 'Show All Tasks'}
					</HomeFilter>
				</HomeCheckboxContainer>
			)}

			<TaskListContainer>
				<TaskList
					tasks={filteredTasks}
					onTaskClick={handleTaskId}
					onTaskDone={handleTaskDone}
					onTaskDelete={handleTaskDelete}
				/>

				<MediaQuery maxWidth={768}>
					{(matches) => <AddTaskButton isSmallScreen={matches} />}
				</MediaQuery>
			</TaskListContainer>
			<Footer />
		</HomeContainer>
	);
};

export default Home;
