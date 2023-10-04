import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled(Link)`
	background-color: #ffe81f;
	color: #000;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 999;
	text-decoration: none;
	transition: background-color 0.2s, transform 0.2s;

	&:hover {
		background-color: #ffd700;
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		width: 40px;
		height: 40px;
		padding: 0;
		border-radius: 50%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		line-height: 1;
		bottom: 100px;
	}

	@media (max-width: 768px) and (hover: hover) {
		&:hover {
			background-color: #ffd700;
			transform: scale(1.1);
		}
	}
`;
