import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import TrellocardItem from './TrelloCardItem'
import TrelloText from './TrelloText'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'

function TrelloCard({ todo, id, todos }) {
	const showModal = useSelector((state) => state.ui.modalIsVisible)
	return (
		<div>
			{showModal && <Modal todos={todos} />}
			<Container>
				<StyledCard>
					<input value={todo} />
					<MoreHorizIcon />
				</StyledCard>
				<div>
					<TrellocardItem todos={todos} />
				</div>
				<TrelloText id={id} />
			</Container>
		</div>
	)
}

export default TrelloCard

const Container = styled.div`
	width: 246px;
	background-color: #ebecf0;
	border-radius: 5px;
	border: 1px solid lightgray;
	text-align: start;
	margin: 5px;
	margin-left: 15px;
`
const StyledCard = styled.div`
	text-align: start;
	width: 230px;
	font-weight: 600;
	display: flex;
	margin-top: 3px;
	margin-bottom: 3px;
	align-items: center;
	justify-content: space-between;
	& input {
		width: 160px;
		margin-top: 10px;
		margin-left: 6px;
		padding: 4px;
		border-radius: 5px;
		border: none;
		font-size: 18px;
		font-weight: 500;
		background-color: #ebecf0;
		color: rgb(70, 71, 71);
	}
`
