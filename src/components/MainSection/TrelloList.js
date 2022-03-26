import React from 'react'
import { useSelector } from 'react-redux'
import TrelloCard from '../Card/TrelloCard'
import styled from 'styled-components'
import Cards from './Cards'

function TrelloList() {
	const todos = useSelector((state) => state.task)
	return (
		<><Cards/>
		<StyledContainer>
			{todos.map((todo) => {
				return <TrelloCard key={todo.id} todo={todo.task} id={todo.id} todos={todo.todos}/>
			})}
		</StyledContainer>
		</>
		
	)
}

export default TrelloList

const StyledContainer = styled.div`
display:flex;
margin-top: 90px;
justify-content:space-between;`