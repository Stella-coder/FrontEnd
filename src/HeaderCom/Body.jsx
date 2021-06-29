import React from 'react'
import styled from "styled-components"

const Body = () => {
    return (
    <Container>
        <Wrapper>
        <img src = "/images/viewers-marvel.png"/>
        <video
        src= "/Videos/Vision.mp4"
        type= "video/mp4"
        autoPlay= {true}
        loop ={true}
        playsInline= {true}
        muted
        />
        </Wrapper>
        
        <Wrapper>
        <img src = "/images/viewers-disney.png"/>
        <video
        src= "/Videos/Logo.mp4"
        type= "video/mp4"
        autoPlay= {true}
        loop ={true}
        playsInline= {true}
        muted
        />
        </Wrapper>
        
        <Wrapper>
        <img src = "/images/viewers-national.png"/>
        <video
        src= "/Videos/Course.mp4"
        type= "video/mp4"
        autoPlay= {true}
        loop ={true}
        playsInline= {true}
        muted
        />
        </Wrapper>
        
    </Container>
    )
}

export default Body

const Container = styled.div`
display:grid;
grid-template-columns:repeat(3, minmax(0,1fr));
margin:20px;
grid-gap: 20px;

`
const Wrapper = styled.div`
border: 3px solid rgba(249,249,249,0.3);
border-radius: 10px;
transition: all 350ms;
box-shadow: rgb(0 0 0 / 68%) 0px 20px 30px -10px;
position:relative;
img{
    width:100%;
    height:100%;
    object-fit: contain;
    opacity:1;
}
video{
    width:100%;
    height:100%;
    object-fit: contain;
    border-radius:10px;
    z-index:1;
    position:absolute;
    left:0;
    opacity:0;
}
&:hover{
    cursor:pointer;
    transform: scale(1.06);
    border-color: white;
    box-shadow: rgb(0 0 0 / 68%) 0px 20px 30px -10px, rgb (0 0 0 / 73%) 0px 16px 30px -10px;
   video{
    opacity:1;
   }
   img{
    opacity:0;
   }
}
`