import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:column;
background-color:rgba(227,228,229,0.5);
width:20em;
height:25em;
justify-content:center;
align-items:center;
border-radius:10%;
`;
export const Form = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
export const ContainerSign = styled.div`
display:flex;
flex-direction:column;
height:3.5em;
align-items:center;
width:100%;
`;
export const Input = styled.input`
color:Black;
background-color:white;
height:2em;
border-radius:7px;
width:70%;
border:2px solid black;
padding-left: 10px;
`;

export const ContainerBtn = styled.div`
display:flex;
height:3.5em;
align-items:start;
justify-content:space-around;
padding-left:5px;
width:100%;
`;
export const Button = styled.button`
color:Black;
background-color:white;
border-radius:7px;
width:40%;
height:1.8em;
font-weight:700;
`;
export const Img = styled.img`
height:10em;

`;
export const Errors = styled.p`
color:red;

`;