import styled from 'styled-components';

export const FormContainer = styled.form`
	max-width: 500px;
	margin: 0 auto;
	padding: 20px;
	border: 2px solid #ffea00;
	border-radius: 10px;
	background-color: #111;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
	color: #fff;

	@media (max-width: 768px) {
		max-width: 90%;
		padding: 10px;
	}
`;

export const FieldContainer = styled.div`
	margin-bottom: 20px;
`;

export const SelectField = styled.select`
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	background-color: #333;
	color: #fff;
	appearance: none;

	@media (max-width: 768px) {
		padding: 8px;
		font-size: 14px;
		margin-bottom: 10px;
	}
`;

export const ErrorMessage = styled.p`
	color: #ff6b6b;
	font-size: 14px;
	margin-top: 5px;
`;
