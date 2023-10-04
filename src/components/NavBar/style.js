import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	background-color: #333;
	color: #fff;
	padding: 20px;
	display: flex;
	justify-content: space-around;
	height: 80px;

	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: space-between;
		height: 150px;
	}
`;

export const customStyles = {
	content: {
		top: '10px',
		right: '10px',
		left: 'auto',
		bottom: 'auto',
		marginRight: '10px',
		padding: '40px',
		backgroundColor: '#333',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		borderRadius: '8px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space around',
		gap: '12px',
	},
};

export const TitleNav = styled.h1`
	min-width: 200px;
	color: #fff;
	display: flex;
	@media (max-width: 768px) {
		text-align: center;
		align-items: center;
		justify-content: center;
	}
`;

export const NavBarDiv = styled.div`
	display: flex;
	flex-direction: row-reverse;
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const NavBarButton = styled.button`
	background-color: #333;
	color: #00ffcc;
	border: none;
	padding: 10px 20px;
	margin: 10px;
	border-radius: 20px;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: #555;
	}
`;
