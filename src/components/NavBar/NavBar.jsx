import React, { useState } from 'react';

import Modal from 'react-modal';
import { handleLogin, handleSignup } from '../../services/api'; // Importe as funções de login e criação de usuário da sua API
import {
	NavbarContainer,
	customStyles,
	NavBarButton,
	NavBarDiv,
	TitleNav,
} from './style';
import { Button } from '../Button/style';
import { InputField } from '../Input/style';

const NavigationBar = () => {
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const [signupData, setSignupData] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const handleSignupChange = (e) => {
		const { name, value } = e.target;
		setSignupData({
			...signupData,
			[name]: value,
		});
	};

	const openLoginModal = () => {
		setLoginModalIsOpen(true);
	};

	const closeLoginModal = () => {
		setLoginModalIsOpen(false);
	};

	const openSignupModal = () => {
		setSignupModalIsOpen(true);
	};

	const closeSignupModal = () => {
		setSignupModalIsOpen(false);
	};

	const handleLoginSubmit = async () => {
		await handleLogin(loginData);

		closeLoginModal();
	};

	const handleSignupSubmit = async () => {
		try {
			await handleSignup(signupData);
		} catch (error) {
		} finally {
			closeSignupModal();
		}
	};

	return (
		<NavbarContainer>
			<TitleNav>Task Manager</TitleNav>
			<NavBarDiv>
				<NavBarButton onClick={openLoginModal}>Login</NavBarButton>
				<NavBarButton onClick={openSignupModal}>Register</NavBarButton>
			</NavBarDiv>

			<Modal
				isOpen={loginModalIsOpen}
				onRequestClose={closeLoginModal}
				style={customStyles}
				contentLabel='Modal de Login'>
				<h2>Login</h2>
				<InputField
					type='email'
					name='email'
					placeholder='Email'
					value={loginData.email}
					onChange={handleLoginChange}
				/>
				<InputField
					type='password'
					name='password'
					placeholder='Senha'
					value={loginData.password}
					onChange={handleLoginChange}
				/>
				<Button onClick={handleLoginSubmit}>Login</Button>
				<Button onClick={closeLoginModal}>Cancel</Button>
			</Modal>

			<Modal
				isOpen={signupModalIsOpen}
				onRequestClose={closeSignupModal}
				style={customStyles}
				contentLabel='Modal de Criação de Usuário'>
				<h2>Criar Usuário</h2>
				<InputField
					type='text'
					name='name'
					placeholder='Nome'
					value={signupData.name}
					onChange={handleSignupChange}
				/>
				<InputField
					type='email'
					name='email'
					placeholder='Email'
					value={signupData.email}
					onChange={handleSignupChange}
				/>
				<InputField
					type='password'
					name='password'
					placeholder='Senha'
					value={signupData.password}
					onChange={handleSignupChange}
				/>
				<InputField
					type='password'
					name='passwordConfirmation'
					placeholder='Confirme a senha'
					value={signupData.passwordConfirmation}
					onChange={handleSignupChange}
				/>
				<Button onClick={handleSignupSubmit}>Create User</Button>
				<Button onClick={closeSignupModal}>Cancel</Button>
			</Modal>
		</NavbarContainer>
	);
};

export default NavigationBar;
