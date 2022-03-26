import React from 'react'
import ListAltIcon from '@material-ui/icons/ListAlt'
import SubjectIcon from '@material-ui/icons/Subject'
import ClearIcon from '@material-ui/icons/Clear'
import styled from 'styled-components'
import Button from '../Ui/Button'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { uiSliceActions } from '../../store/slices/uiSlice'

function Backdrop({ onConfirm }) {
	return <StyledBackdrop onClick={onConfirm}></StyledBackdrop>
}
function ModalOverly({ onConfirm }) {
	return (
		<StyledContainer>
			<StyledTitle>
				<ListAltIcon style={{ color: 'blue' }} />
				<h2>Redux---</h2>
			</StyledTitle>
			<div>
				<p>В калонке ---</p>
			</div>
			<div>
				<StyledDescription>
					<SubjectIcon />
					<h3>Описание</h3>
				</StyledDescription>
				<StyledTextarea />
				<StyledSave>
					<div>
						<Button>Сохранить</Button>
						<ClearIcon onClick={onConfirm} />
					</div>
					<span>Помощь по форматированию</span>
				</StyledSave>
			</div>
		</StyledContainer>
	)
}

const Modal = ({ todos }) => {
	const dispatch = useDispatch()
	const cancelHandler = () => {
		dispatch(uiSliceActions.cancel())
	}
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={cancelHandler} />,
				document.getElementById('backdrop'),
			)}
			{ReactDOM.createPortal(
				<ModalOverly onConfirm={cancelHandler} todos={todos} />,
				document.getElementById('modal-root'),
			)}
		</>
	)
}

export default Modal

const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
`
const StyledContainer = styled.div`
	z-index: 100;
	top: 150px;
	left: 460px;
	width: 600px;
	height: 400px;
	background-color: #ebecf0;
	box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
	padding: 25px;
	position: fixed;
	border-radius: 6px;
	&& p {
		margin-top: 0;
		font-size: 17px;
		margin-left: 70px;
	}
`
const StyledTitle = styled.div`
	margin-left: 20px;
	display: flex;
	width: 149px;
	align-items: center;
	justify-content: space-between;
`
const StyledDescription = styled.div`
	margin: 20px;
	display: flex;
	align-items: center;
	width: 130px;
	justify-content: space-between;
`
const StyledTextarea = styled.textarea`
	margin-top: 10px;
	width: 500px;
	padding: 10px;
	margin-left: 39px;
	height: 90px;
	border-radius: 5px;
`
const StyledSave = styled.div`
	margin-left: 43px;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&& div {
		display: flex;
		align-items: center;
	}
	&& span {
		background: #bdc2c4;
		border-radius: 3px;
		padding: 10px;
	}
`
