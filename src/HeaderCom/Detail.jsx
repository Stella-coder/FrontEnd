import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import movieData from "./movie.json"

const Detail = () => {
    const {id} = useParams()
    console.log("This is the id", id)

    const[file, setFile] = useState([])

    const getData = ()=>{
        const res = movieData[id - 1]
        console.log(res)
        setFile(res)
    }
    useEffect(()=>{
        getData()
    },[])


    return (
        <>
        <Background src ={file && file.backgroundImg}/>

        <Wrapper>
        <Tittle src = {file && file.titleImg}/>
        
            <ButtonHolder>
              <PlayButton>
                  <img src = "/images/play-icon-black.png"/>
                  <span>Play</span>
                  </PlayButton>
              <TrailerButton>
                  <img src = "/images/play-icon-white.png"/>
                  <span>Trailer</span>
              </TrailerButton>
              <AddButton><span>+</span></AddButton>
              <GroupButton> <img src ="/images/group-icon.png"/></GroupButton>
            </ButtonHolder>

            <Description>{file && file.subTitle}</Description>
            <Details>{file && file.description}</Details>
      
        </Wrapper>
        
        </>   
    )
}

export default Detail

const Background = styled.img`
width:99.9vw;
height:99.3vh;
object-fit:cover;
position:relative;
z-index:-1;

`
const Tittle = styled.img`
width:300px;
`

const Wrapper = styled.div`
position:absolute;
top:10px;
left:20px;
`

const ButtonHolder = styled.div`
display:flex;
margin:10px;

`

const PlayButton = styled.div`
height:50px;
width:130px;
background-color:white;
border-radius:5px;
display:flex;
justify-content: center;
align-items: center;
cursor:pointer;
transform: scale(1);
transition: all 350ms;
border: 2px solid white;
&:hover{
    cursor:pointer;
    background-color:rgba(249,249,249,0.5);
    transform: scale(1.02)
}
`

const TrailerButton = styled.div`
height:50px;
width:130px;
background-color:gray;
border: 2px solid white;
border-radius:5px;
display:flex;
justify-content: center;
align-items: center;
margin-left:20px;
cursor:pointer;
transform: scale(1);
transition: all 350ms;
opacity:0.6;
&:hover{
    cursor:pointer;
    transform: scale(1.02);
    opacity:1;
    
}

`
const AddButton = styled.div`
heigth:50px;
width:50px;
border-radius:25px;
border: 1px solid white;
display:flex;
justify-content:center;
align-items: center;
margin-left:20px;
background-color: rgba(0,0,0,0.5);
cursor:pointer;


span{
    color:white;
    font-size:25px;
    font-weigth:bold;
    
}
`
const GroupButton = styled.div`
heigth:50px;
width:50px;
border-radius:25px;
border: 1px solid white;
display:flex;
justify-content:center;
align-items: center;
margin-left:20px;
background-color: black;
cursor:pointer;
background-color: rgba(0,0,0,0.8);

`
const Description = styled.div`
font-weight:bold;
text-transform:uppercase;
letter-spacing:1.5px;
color:white;
opacity:0.6;
margin-top:10px;
`

const Details = styled.div`
font-weight:bold;
text-transform:uppercase;
letter-spacing:1.5px;
color:white;
margin-top:30px;
max-width:950px;

`