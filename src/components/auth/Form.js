import React, { useState } from 'react'
import styled from 'styled-components'

const Form = ({title,handleClick}) => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
  return (
    <StyledContainer>
			<div>
				<Image src='https://www.vectorlogo.zone/logos/trello/trello-official.svg' />
			</div>
			<StyledMain>
				<section>
						<StyledH2>Вход в Trello</StyledH2>
						<div>
							<StyledInput
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
								type='email'
								placeholder='Укажите адрес электронной почты'
							/>
						</div>
						<div>
							<StyledInput
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
								type='password'
								placeholder='Введите пароль'
							/>
						</div>
						<StyledButton onClick={()=>handleClick(email,password)}>Войти</StyledButton>
						
				</section>
		{title}
			</StyledMain>
		</StyledContainer>
  )
}

export default Form


const StyledContainer = styled.div`
	height: 100vh;
	text-align: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url('https://blog.trello.com/hubfs/All_the_different_card_types_in_Trello_and_how_to_make_the_most_of_them.png');
`
const StyledMain = styled.main`
	margin: 1rem auto;
	box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
	width: 30rem;
	border-radius: 5px;
	padding: 2.5rem;
	text-align: center;
	background-color: white;
`
const StyledInput = styled.input`
	display: block;
	width: 320px;
	margin: 1.8rem auto;
	border-radius: 4px;
	padding: 12px;
	font-size: 17px;
	border: 2px solid #ccc;
`

const Image = styled.img`
	width: 190px;
	margin-top: 80px;
	height: 90px;
`
const StyledH2 = styled.h2`
	margin-top: 20px;
	font-size: 30px;
	color: blue;
`
const StyledButton = styled.button`
	width: 330px;
	background-color: green;
	border: none;
	height: 40px;
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 25px;
	color: white;
	font-size: 19px;
`