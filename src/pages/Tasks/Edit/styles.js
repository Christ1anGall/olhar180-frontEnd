import styled from 'styled-components';

export const Container = styled.div`
	background-color: #1f1f1f;
	color: #fff;
	padding: 40px 80px;

	max-width: 100%;
	height: 100vh;
	margin: 0 auto;
	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
		padding: 10px;
	}
`;

export const Title = styled.h1`
	font-size: 24px;
	margin-bottom: 40px;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;
