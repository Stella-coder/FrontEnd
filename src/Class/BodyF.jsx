import React from 'react'
import styled from "styled-components"

const BodyF = () => {
    return (
      <Container>
          <Wrapper>
          <Logo>
          <img src = "images/cta-logo-one.svg"/> 
          </Logo>
          <Button>Get All Here</Button>
          <Text>After you are done installing through yarn or npm, now you will have to include css in your project.</Text>
          <Images src = "images/cta-logo-two.png"/>
         
          </Wrapper>

      </Container>
    )
}

export default BodyF

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`

const Wrapper = styled.div`
height:300px;
width:600px;


`
const Logo = styled.div`

`
const Button = styled.div`
width:100%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background-color:blue;
border-radius:5px;
color:white;
font-weight:bold;
font-size:18px;
cursor:pointer;
&:hover{
    background-color:lightblue;
}


`
const Text = styled.div`
color:white;
text-align:center;
font-size:17px;
margin:10px;

`
const Images = styled.img`
width:100%;

`