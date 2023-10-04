import styled from 'styled-components';


export const DeleteConfirmContainer = styled.div`
  background-color: #000; 
  color: #fff; 
  padding: 20px;
  border: 2px solid #ffea00;
  border-radius: 10px;
  text-align: center;
`;

export const ConfirmText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ActionButton = styled.button`
  background-color: #ffea00; 
  color: #000; 
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ffdf00; 
  }
`;