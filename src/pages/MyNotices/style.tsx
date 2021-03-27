import styled from "styled-components";
export const Content=styled.div`
height: 100vh;
`
export const Create = styled.h3`
width: fit-content;
padding: 4px;
border:2px solid black;
margin-left: 6%;
cursor: pointer;
border-radius: 4px;
&:hover{
background-color:green ;
}
&:active{
    background-color: greenyellow;
}
`