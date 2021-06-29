import React from 'react'
import styled from "styled-components"
import Body from './Body'
import BodyView from './BodyView'
import HeaderV from './HeaderV'

const HomeScreen = () => {
    return (
        <Container>
            <HeaderV/>
            <Body/>
            <BodyView/>
            
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
height:100vh;
width:100vw;
position: relative;

&:before{
    content: "";
    background: url("/images/home-background.png")
    center center / cover fixed no-repeat;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
}

`
