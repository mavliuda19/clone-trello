import React, { useState } from 'react'
import { data } from '../data/data'
import styled from 'styled-components'
import { MoreHoriz } from '@material-ui/icons'

const Cards = () => {
	const [boards, setBoards] = useState(data)
	const [currentBoard, setCurrentBoard] = useState(null)
	const [currentItem, setCurrentItem] = useState(null)

	function dragOverHandler(e) {
		e.preventDefault()
		if (e.target.className === 'item') {
			e.target.style.boxShadow = '0 2px 3px gray'
		}
	}
	function dragLeaveHandler(e) {
	}
	function dragStartHandler(e, board, item) {
		setCurrentBoard(board)
		setCurrentItem(item)
	}
	function dragEndHandler(e) {
	}
	function dropHandler(e, board, item) {
		e.preventDefault()
		const currentIndex = currentBoard.items.indexOf(currentItem)
		currentBoard.items.splice(currentIndex, 1)
		const droptIndex = board.items.indexOf(item)
		board.items.splice(droptIndex + 1, 0, currentItem)
		setBoards(
			boards.map((b) => {
				if (b.id === board.id) {
					return board
				}
				if (b.id === currentBoard.id) {
					return currentBoard
				}
				return b
			}),
		)
	}
	function dropCardHandler(e, board) {
		board.items.push(currentItem)
		const currentIndex = currentBoard.items.indexOf(currentItem)
		currentBoard.items.splice(currentIndex, 1)
		setBoards(
			boards.map((b) => {
				if (b.id === board.id) {
					return board
				}
				if (b.id === currentBoard.id) {
					return currentBoard
				}
				return b
			}),
		)
	}

	return (
		<StyledContainer>
			{boards.map((board) => (
				<StyledBoard
					className='board'
					key={board.id}
					onDrop={(e) => dropCardHandler(e, board)}
					onDragOver={(e) => dragOverHandler(e)}
				>
					<StyledTitle className='board__title'>
						<p>{board.title}</p>
						
						<MoreHoriz/>
					</StyledTitle>
					<img src={board.img}/>
					{board.items.map((item) => (
						<StyledItem
							key={item.id}
							onDragOver={(e) => dragOverHandler(e)}
							onDragLeave={(e) => dragLeaveHandler(e)}
							onDragStart={(e) =>
								dragStartHandler(e, board, item)
							}
							onDragEnd={(e) => dragEndHandler(e)}
							onDrop={(e) => dropHandler(e, board, item)}
							draggable={true}
							className='item'
						>
							<ImageItem>
								{item.title}
							<img src={item.image}/>
							</ImageItem>
							
						</StyledItem>
					))}
				</StyledBoard>
			))}
		</StyledContainer>
	)
}

export default Cards

const StyledContainer = styled.div`
	width: 100vm;
	display: flex;
	min-height: 200px;
	margin-top: 90px;
	margin-left: 5px;
`
const StyledBoard = styled.div`
width: 230px;
	border: 1px solid lightgray;
	border-radius: 5px;
	margin: 5px;
	height:280px;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #ebecf0;
	padding: 6px;
	text-align: start;
	& img{
		width: 80px;
		margin-right: 110px;
	}
`
const StyledTitle = styled.div`
	font-size: 18px;
	font-weight: 600;
    color: rgb(70, 71, 71);
	text-align: start;
	width: 220px;
	display: flex;
	height: 30px;
	margin-bottom: 5px;
	align-items: center;
	justify-content: space-between;
`
const StyledItem = styled.div`
	padding: 7px;
	margin: 4px 0;
	cursor: grab;
	width: 215px;
	background-color: #fcfcf9;
	list-style: none;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0 2px 6px rgb(0, 0, 0, 0.26);
`
const ImageItem = styled.div`
width:200px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 17px;
font-weight:400;
& img{
	margin:  0;
	width: 60px;
}
`
