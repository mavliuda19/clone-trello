import React from 'react'
import AddCard from './AddCard'
import TrelloList from './TrelloList'
import styled from 'styled-components'

function MainSection() {
	return (
		<>
			<StyledContainer>
				<StyledContent>
					<TrelloList />
					<AddCard />
				</StyledContent>
			</StyledContainer>
		</>
	)
}

export default MainSection

const StyledContainer = styled.div`
	height: 100vh;
	width: 100vm;

`
const StyledContent = styled.div`
	height: 100vh;
	overflow-x: scroll;
	white-space: nowrap;
	display: flex;
	position: absolute;
	width: 100%;
	min-width: 1535px;
	background-image: url('https://images.unsplash.com/photo-1547901306-7af54d348827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80');
	background-size: cover;
`
