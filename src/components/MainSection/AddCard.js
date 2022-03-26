import Input from '../Ui/Input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { taskSliceActions } from '../../store/slices/taskSlice'
import StyledButton from '../Ui/Button'
import ClearIcon from '@material-ui/icons/Clear'
import { useNavigationAway } from '../../hooks/useNavigationAway'
import { DialogLeavingPage } from '../Modal/DialogLeavingPage'

function AddCard() {
	const [inputValue, setInputValue] = useState('')
	const [showToogle, setShowToogle] = useState(false)
	const dispatch = useDispatch()
	const [canShowDialogLeavingPage, setCanShowDialogLeavingPage] =
		useState(false)
	const [showDialogLeavingPage, confirmNavigation, cancelNavigation] =
		useNavigationAway(canShowDialogLeavingPage)

	const inputChangeHandler = (e) => {
		setInputValue(e.target.value)

		if (e.target.value !== '') {
			setCanShowDialogLeavingPage(true)
		} else {
			setCanShowDialogLeavingPage(false)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if (inputValue.trim().length === 0) {
			return
		}
		dispatch(
			taskSliceActions.addTask({
				task: inputValue,
				id: Math.random().toString(),
			}),
		)
		setInputValue('')
	}

	return (
		<>
			{showDialogLeavingPage && (
				<DialogLeavingPage
					confirmNavigation={confirmNavigation}
					cancelNavigation={cancelNavigation}
				/>
			)}
			<StyledContainer>
				<form onSubmit={submitHandler}>
					{showToogle ? (
						<StyledDiv>
							<Input
								onChange={inputChangeHandler}
								value={inputValue}
							/>
							<div>
								<StyledButton>Добавить список</StyledButton>
								<ClearIcon
									onClick={() => setShowToogle(false)}
								/>
							</div>
						</StyledDiv>
					) : (
						<StyledTitle onClick={() => setShowToogle(true)}>
							+ Добавить список
						</StyledTitle>
					)}
				</form>
			</StyledContainer>
		</>
	)
}

export default AddCard

const StyledContainer = styled.div`
	margin: 0.7rem auto;
	width: 230px;
	margin-top: 90px;
	/* position: relative; */
	/* left: 13px; */
	margin-left: 14px;
	margin-right: 20px;
`
const StyledDiv = styled.div`
	width: 230px;
	margin-right: 10px;
	margin-top: 6px;
	border-radius: 5px;
	background-color: #ebecf0;
	padding: 5px;
	border: 1px solid gray;
	&& div {
		display: flex;
		align-items: center;
		width: 180px;
		justify-content: space-between;
	}
`
const StyledTitle = styled.div`
	width: 210px;
	display: flex;
	align-items: center;
	padding-left: 13px;
	height: 43px;
	background-color: #ebecf0;
	opacity: 0.8;
	font-size: 18px;
	border-radius: 5px;
	font-weight: 600;
	margin-top: 6px;
	&&:hover {
		background-color: rgb(141, 142, 143);
		font-weight: 600;
		cursor: pointer;
		color: white;
	}
`
