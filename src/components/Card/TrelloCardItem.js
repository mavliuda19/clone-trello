import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { uiSliceActions } from '../../store/slices/uiSlice'

function TrelloCardItem({ todos }) {
	const dispatch = useDispatch()
	const showModalHandler = () => {
		dispatch(uiSliceActions.toogle())
	}
	return (
		<ul style={{ padding: '0' }}>
			{todos.map((el) => (
				<StyledLi onClick={showModalHandler} key={el.id}>
					{el.item}
				</StyledLi>
			))}
		</ul>
	)
}

export default TrelloCardItem
const StyledLi = styled.li`
	list-style: none;
	width: 214px;
	background-color: white;
	box-shadow: 0 2px 6px rgb(0, 0, 0, 0.26);
	padding: 7px;
	border-radius: 6px;
	margin: 5px auto;
	cursor: grab;
`
