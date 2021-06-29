import React, {useState} from 'react'
import styled from "styled-components"
import {CgMenu} from "react-icons/cg"
import { Link } from 'react-router-dom'

const HeaderV = () => {
    const[show, setShow] = useState(false)
    const toogle= ()=>{
        setShow(!show)
    }
    return (
        <>
        <Container>
               <Logo>
                   <img src= "/images/logo.png"/>
               </Logo>
               <Wrapper>
                   <a>
                       <img src = "/images/home-icon.svg"/>
                       <span>Home</span>
                   </a>
                   <a>
                       <img src = "/images/movie-icon.svg"/>
                       <span>Movie</span> 
                   </a>
                
                   <a>
                       <img src = "/images/original-icon.svg"/>
                       <span>Original</span>
                   </a>
                   <a>
                       <img src = "/images/series-icon.svg"/>
                       <span>Series</span>
                   </a>
                   <a>
                       <img src = "/images/search-icon.svg"/>
                       <span>Search</span>
                   </a>
               </Wrapper>
               <Link to= "/class">
               <UserAvatar>
                    <img src ="/images/3.jpg"/>
                    <span>Log Out</span>
               </UserAvatar>
               </Link>
               <Menu onClick={toogle}/>
               
        </Container>
        
        {show?<SubMenu onClick={()=>{setShow(!show)}}>
                <a>
                       <img src = "/images/home-icon.svg"/>
                       <span>Home</span>
                   </a>
                   <a>
                       <img src = "/images/movie-icon.svg"/>
                       <span>Movie</span> 
                   </a>
                
                   <a>
                       <img src = "/images/original-icon.svg"/>
                       <span>Original</span>
                   </a>
                   <a>
                       <img src = "/images/series-icon.svg"/>
                       <span>Series</span>
                   </a>
                   <a>
                       <img src = "/images/search-icon.svg"/>
                       <span>Search</span>
                   </a>
                   <Link to= "/class">
                <SubUser>
                     <img src ="/images/3.jpg"/>
                    <span>Log Out</span>
                </SubUser>
                </Link>
        </SubMenu>
        :null}
        
        </>
    )
}

export default HeaderV

const SubMenu = styled.div`
display:none;
@media screen and (max-width: 786px){
    width:50vw;
    height:60%;
    background-color:#090b13;
    float:right;
    border-radius:0 0 0px 10px;
    display:flex;
    flex-direction:column;
    padding-left:10px;
    padding-top:10px;

    a{
            width:100%
            display:flex;
            align-items:center;
            height:70px;
            margin-left:20px;
            cursor:pointer;
            
            
        img{
            width:25px;
            
        }
        span{
            font-weight:bold;
            text-transform:uppercase;
            opacity:0.6;
            font-weight:20px;
            position:relative;
        
        
        &:after{
            content:"";
            height:2px;
            right:0;
            left:0;
            bottom:-1px;
            position:absolute;
            background-color:white;
            opacity:0;
            transform:scaleX(1);
            }
        }
        
            &:hover{
               span{
                 
                opacity:1;}
                span:after{
                    opacity:1;
                    transition: all 550ms;
                    transform:scaleX(1.1);
                    transform-origin: center left;
                }
            
        }        
    }
}

`
const SubUser = styled.div`
display:flex;
flex-direction:column;
padding-left:20px;
color:white;
img{
    width:40px;
    height:40px;
    border-radius:20px;
}span{
    opacity:0;
}
&:hover{
span{
    opacity:1
}

`

const Menu = styled(CgMenu)`
display:none;

@media screen and (max-width: 768px){
    display:block;
    font-size:30px;
    padding-right:30px,
    cursor:pointer;
    margin-top:20px;
}
`

const Container = styled.div`
width:100vw;
height:70px;
background-color:#040714;
display:flex;
color:white;
flexWrap:wrap;

@media screen and (max-width: 768px){
    display:flex;
    justify-content:space-between;
    width:100vw;
}
`

const Logo = styled.div`
width:30px;
margin-left:10px;
margin-right:10px;
object-fit:contain;
`
const Wrapper = styled.div`
margin-left:50px;
flex:1;
display:flex;


a{
    display:flex;
    align-items:center;
    height:70px;
    margin-left:20px;
    cursor:pointer;
    
    
img{
    width:25px;
    
}
span{
    font-weight:bold;
    text-transform:uppercase;
    color:white;
    opacity:0.6;
    font-weight:20px;
    position:relative;


&:after{
    content:"";
    height:2px;
    right:0;
    left:0;
    bottom:-1px;
    position:absolute;
    background-color:white;
    opacity:0;
    transform:scaleX(1);
    }
}

    &:hover{
       span{
         
        opacity:1;}
        span:after{
            opacity:1;
            transition: all 550ms;
            transform:scaleX(1.1);
            transform-origin: center left;
        }
    
}
@media screen and (max-width: 786px){
    display:none;
}
}
`
const UserAvatar = styled.div`
display:flex;
flex-direction:column;
margin-right:20px;
cursor:pointer;
img{
    width:40px;
    height:40px;
    border-radius:20px;
    margin-top:5px;
}
span{
    opacity:0;
}
&:hover{
span{
    opacity:1
}
}
@media screen and (max-width: 786px){
    display:none;
}


`
