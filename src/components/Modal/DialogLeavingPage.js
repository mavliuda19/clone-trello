import styled from 'styled-components'
export const DialogLeavingPage = ({
	cancelNavigation,
	confirmNavigation,
})=>{

    return(
        <>
        <StyledBackdrop onClick={cancelNavigation}/>
        <StyledModal>
            <h3>Leaving Page</h3>
            <div>
                <h4>There are unsaved changes. Are you sure want to leave this page?</h4>
                
            </div>
            <div>
                <button  onClick={cancelNavigation}>
                    No
                </button>
                <button  onClick={confirmNavigation}>
                    Yes
                </button>
            </div>
        </StyledModal>
        </>
        
    )
}

const StyledModal=styled.div`
width: 490px;
height: 135px;
padding:10px;
background-color: aliceblue;
z-index: 100;
position: fixed;
border-radius: 5px;
left: 517px;
top: 90px;
& button{
    width: 66px;
    margin-left: 20px;
    height: 28px;
    margin-bottom:5px;
    font-size: 17px;
    cursor: pointer;
}
`
const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
`