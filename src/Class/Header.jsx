import React from 'react'
import styled from "styled-components"

const Header = () => {
    return (
       <Container>
           <Logo img src = "/images/logo.png"/>
           <Wrapper>Login</Wrapper>

       </Container>
    )
}

export default Header

const Container = styled.div`
height:80px;
width:100vw;
background-color: #090b13;
display:flex;
justify-content:space-between;
align-items:center;

`

const Logo = styled.img`
margin-left:30px;
`

const Wrapper =styled.div`
width:100px;
height:25px;
border: 3px solid white;
display:flex;
align-items: center;
justify-content:center;
color:white;
margin-right:50px;
cursor:pointer;




`