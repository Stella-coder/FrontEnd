import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import movieData from "./movie.json"

const BodyView = () => {
    

    return (
     <Maincontainer>
         <Recommended>RECOMMENDED JUST FOR YOU</Recommended>
         <Container>
            {
                movieData.map(movie =>(
                    <Wrapper key={movie._id}>
                        <Link to = {`/detail/${movie._id}`}>
                        <img src= {movie.cardImg} />
                        </Link>
                     </Wrapper>

                ))
            }
         </Container>

     </Maincontainer>
    )
}

export default BodyView

const Maincontainer = styled.div`
`

const Recommended = styled.div`
font-weight:bold;
font-size: 20px;
margin: 20px;
color:white;


`

const Container = styled.div`
display:grid;
grid-template-columns:repeat(4, minmax(0,1fr));
margin:20px;
grid-gap: 20px;

`

const Wrapper = styled.div`

border: 3px solid rgba(249,249,249,0.3);
border-radius: 10px;
transition: all 350ms;
box-shadow: rgb(0 0 0 / 68%) 0px 20px 30px -10px;

img{
    width:100%;
    height:100%;
    object-fit: cover;
    opacity:1;
    border-radius: 10px;
}

&:hover{
    cursor:pointer;
    transform: scale(1.06);
    border-color: white;
    box-shadow: rgb(0 0 0 / 68%) 0px 20px 30px -10px, rgb (0 0 0 / 73%) 0px 16px 30px -10px;
   
}


`
