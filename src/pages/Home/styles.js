import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
	margin: 0 auto;

	background-color: #222;
	color: #fff;

	padding-bottom: 100px;

	@media (min-width: 768px) {
		height: 100vh;
	}
`;

const pulse = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const StyledH1 = styled.h1`
	text-align: center;
	margin-top: 25px;
	font-family: 'Futura', sans-serif;
	color: #00bfff;
	font-size: 24px;
	text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
	animation: ${pulse} 1s infinite alternate;
	max-width: 100%;

	@keyframes changeColor {
		0%,
		25% {
			color: #00bfff;
		}
		50% {
			color: #ffcc00;
		}
		75% {
			color: #ff3;
		}
		100% {
			color: #ff3399;
		}
	}

	animation: ${pulse} 1s infinite alternate, changeColor 4s infinite alternate;
`;

export const TaskListContainer = styled.div`
	margin-top: 20px;
`;

export const TaskCreateContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #333;
	color: #fff;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	& > * {
		margin-bottom: 15px;
	}
`;

export const TaskEditContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #333;
	color: #fff;
`;

export const TaskDeleteContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #333;
	color: #fff;
`;

export const ConfirmationText = styled.p`
	font-size: 18px;
	margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ConfirmButton = styled.button`
	background-color: #d9534f;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: #c9302c;
	}
`;

export const CancelButton = styled.button`
	background-color: #00bfff;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: #0080ff;
	}
`;

export const HomeCheckboxContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 20px;
	color: #fff;
	font-size: 16px;
`;

export const HomeFilter = styled.div`
	margin-right: 10px;
	cursor: pointer;
	background-color: transparent;
	width: 200px;
	height: 40px;
	border-radius: 5px;
	transition: border-color 0.2s;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffd700;
	color: black;

	&:hover {
		background-color: #ffd701;
		transform: scale(1.1);
	}

	&:active {
		background-color: #c2468c;
	}
`;
