import { ButtonWrapper } from './style';

const AddTaskButton = ({ isSmallScreen }) => {
	return (
		<ButtonWrapper to={'/criar-tarefa'}>
			{isSmallScreen ? '+' : 'Create Task'}
		</ButtonWrapper>
	);
};

export default AddTaskButton;
