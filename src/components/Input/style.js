import styled from 'styled-components';

export const InputField = styled.input`
	width: 100%;
	padding: 10px;
	min-height: 50px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	background-color: #333;
	color: #fff;

	@media (max-width: 768px) {
		padding: 8px;
		font-size: 14px;
		margin-bottom: 10px;
	}
`;
