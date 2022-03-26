import styled from 'styled-components'

const Button = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}
export default Button

const StyledButton = styled.button`
	width: 140px;
	height: 37px;
	border: none;
	background-color: rgb(64, 105, 240);
	color: white;
	font-size: 14px;
	border-radius: 5px;
	cursor: pointer;
`