import React from 'react'
import styled from "styled-components"
import BodyF from './BodyF'
import Header from './Header'


const ViewScreen = () => {
    return (
    <Container>
        <Header/>
        <BodyF/>
       
    </Container>
    )
}

export default ViewScreen

const Container = styled.main`
width:100vw;
height:100vh;
position:relative;




&:before{
    content:"";
    background: url("images/login-background.jpg")
    center center / cover fixed no-repeat;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:-1;
    opacity:0.7;

}
`