import React from 'react'
import styled from 'styled-components'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import AppsIcon from '@material-ui/icons/Apps'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
function MainHeader() {
	return (
		<>
			<ContainerHeader>
				<Container>
					<StyledDiv>
						<span>
							<AppsIcon />
						</span>
						
					</StyledDiv>
					<StyledDiv>
						<span><Image src='https://www.vectorlogo.zone/logos/trello/trello-official.svg' />
							</span>
					</StyledDiv>
					<StyledDiv>
						<span>
							Рабочие пространство <KeyboardArrowDownIcon />
						</span>
					</StyledDiv>
					<StyledDiv>
						<span>
							Недавние <KeyboardArrowDownIcon />
						</span>
					</StyledDiv>
					<StyledDiv>
						<span>
							В избранном <KeyboardArrowDownIcon />
						</span>
					</StyledDiv>
					<StyledDiv>
						<span>
							Шаблоны <KeyboardArrowDownIcon />
						</span>
					</StyledDiv>
					<StyledDiv>
						<span style={{backgroundColor:'rgb(192, 190, 190)'}}>Создать</span>
					</StyledDiv>
				</Container>
				<StyledInput type='text' placeholder='Поиск' />
				<ErrorOutlineIcon
					style={{
						color: 'white',
						cursor: 'pointer',
						marginTop: '19px',
						fontSize: '27px',
					}}
				/>
				<NotificationsNoneIcon
					style={{
						color: 'white',
						marginTop: '19px',
						fontSize: '30px',
						cursor: 'pointer',
					}}
				/>

				<Icon src='https://cdn-icons-png.flaticon.com/512/194/194938.png' />
			</ContainerHeader>
		</>
	)
}

export default MainHeader

const ContainerHeader = styled.header`
	display: flex;
	justify-content: space-between;
	position: fixed;
	z-index: 10;
	width: 100%;
	background-color: rgb(88, 91, 95);
`
const Container = styled.div`
	width: 810px;
	display: flex;
	margin: 8px;
`
const StyledDiv = styled.div`
	& :hover {
		background-color: rgb(192, 190, 190);
	}
	& span {
		border: none;
		height: 25px;
		border-radius: 3px;
		padding: 3px;
		font-size: 15px;
		margin: 9px;
		display: flex;
		color: white;
		align-items: center;
		cursor: pointer;
	}
`
const Icon = styled.img`
	margin: 10px;
	width: 50px;
	margin-right: 15px;
	height: 40px; ;
`
const Image = styled.img`
	width: 85px;
	background-size: cover;
`

const StyledInput = styled.input`
	margin-top: 17px;
	margin-left: 299px;
	border-radius: 4px;
	width: 220px;
	padding: 2px;
	border: none;
	height: 29px;
`

