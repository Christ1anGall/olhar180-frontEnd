import React from 'react';
import { ActionButton, ConfirmText, DeleteConfirmContainer } from './style';

const TaskDeleteConfirm = ({ onConfirm, onCancel }) => {
	return (
<DeleteConfirmContainer>
      <ConfirmText>Are you sure you want to delete this task?</ConfirmText>
      <ActionButton onClick={onConfirm}>Yes</ActionButton>
      <ActionButton onClick={onCancel}>No</ActionButton>
    </DeleteConfirmContainer>
	);
};

export default TaskDeleteConfirm;
