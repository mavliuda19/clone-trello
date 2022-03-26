import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
margin: 8rem auto;
	content: ' ';
	display: block;
	animation: ${rotate360} 1.5s linear infinite;
	transform: translateZ(0);
	border: 8px solid teal;
	border-color: teal transparent teal teal;
	width: 50px;
	height: 50px;
	border-radius: 50%;
`

export default Spinner
