import styled from 'styled-components';

export const TaskItem = styled.li`
	margin: 10px 0;
	padding: 10px;
	border: 2px solid red;
	background-color: #1f1f1f;
	color: #fff;
	border-radius: 10px;

	cursor: pointer;
	flex-grow: 1;

	&:hover {
		background-color: #333;
	}

	div {
		p {
			margin: 5px 0;
		}
	}

	@media (min-width: 768px) {
		max-width: none;
		max-height: none;
	}
`;

export const TaskListWrapper = styled.ul`
	list-style-type: none;
	padding: 0 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	margin-top: 20px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const TaskItemWrapper = styled.li`
	flex: 0 1 calc(45.5% - 40px);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	min-width: 250px;
	padding: 15px;
	background-color: #1f1f1f;
	border-radius: 10px;
	box-shadow: 1px 4px 10px rgba(0, 0, 0, 4);
	transition: background-color 0.5s ease-in-out;

	flex-grow: 1;

	min-height: 120px;

	&:hover {
		background-color: #333;
		box-shadow: 1px 4px 20px rgba(0, 0, 0, 4);
	}
`;

export const TaskInfo = styled.div`
	flex: 1;
	cursor: pointer;
`;

export const TaskTitle = styled.p`
	font-size: 18px;
	font-weight: bold;
	margin: 0;
	color: #fff;
`;

export const TaskDescription = styled.p`
	font-size: 14px;
	margin: 5px 0;
	color: #ccc;
	max-width: 70%;
	word-break: break-all;
`;

export const TaskEstimated = styled.p`
	font-size: 14px;
	margin: 5px 0;
	color: #ccc;
`;

export const TaskFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const TaskPriority = styled.p`
	font-size: 14px;
	margin: 0;
	color: #f44336;
`;

export const CheckboxContainer = styled.label`
	display: inline-block;
	position: relative;
	cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	opacity: 0;
	cursor: pointer;
`;

export const CustomCheckbox = styled.span`
	position: relative;
	display: inline-block;
	width: 20px;
	height: 20px;

	transition: all 0.2s;
	border: 2px solid ${(props) => (props.checked ? '#4caf50' : '#f44336')};
	background-color: ${(props) => (props.checked ? '#4caf50' : 'transparent')};

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 8px;
		height: 8px;
		border: 2px solid white;
		border-top: none;
		border-left: none;
		opacity: ${(props) => (props.checked ? '1' : '0')};
		transition: opacity 0.2s;
	}
`;

export const divDeleteTask = styled.div`
	cursor: pointer;
	color: #f44336;
	font-size: 18px;
	transition: color 0.2s;

	&:hover {
		color: #d32f2f;
	}
`;
