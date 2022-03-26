import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import StyledButton from '../Ui/Button'
import ClearIcon from '@material-ui/icons/Clear'
import { taskSliceActions } from '../../store/slices/taskSlice'

const TrelloText = (props) => {
	const [show, setShow] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const dispatch = useDispatch()

	const inputChangeHandler = (e) => {
		setInputValue(e.target.value)
	}
	const submitHandler = (e, id) => {
		e.preventDefault()
		if (inputValue.trim().length > 0) {
			const data = {
				item: inputValue,
				id: Math.random().toString(),
			}
			dispatch(taskSliceActions.addItem({ data, id }))
		}
		setInputValue('')
	}

	return (
		<div>
			{show ? (
				<div>
					<StyledTextArea
						onChange={(e) => inputChangeHandler(e)}
						value={inputValue}
						placeholder='Ввести заголовок для этой карточки'
					/>
					<StyledContainer>
						<StyledButton
							onClick={(e) => submitHandler(e, props.id)}
						>
							Добавить карточку
						</StyledButton>
						<ClearIcon onClick={() => setShow(false)} />
					</StyledContainer>
				</div>
			) : (
				<Styledh3 onClick={(e) => setShow(true)} id={props.id}>
					+ Добавить список
				</Styledh3>
			)}
		</div>
	)
}

export default TrelloText

const StyledTextArea = styled.textarea`
	margin-left: 5px;
	padding: 5px;
	font-size: 15px;
	border-radius: 3px;
	box-shadow: 0 2px 6px rgb(0, 0, 0, 0.26);
	max-width: 230px;
	max-height: 70px;
	min-height: 70px;
	min-width: 224px;
`
const StyledContainer = styled.div`
	display: flex;
	padding: 5px;
	align-items: center;
	width: 175px;
	justify-content: space-between;
`
const Styledh3 = styled.h3`
	font-weight: 400;
	margin-left: 9px;
	margin: 0 0 8px 8px;
`
