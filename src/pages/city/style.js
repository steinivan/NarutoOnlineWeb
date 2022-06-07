import styled from 'styled-components'
export const DivContainerOption = styled.div`
display:flex;
flex-direction:column
`;
export const DivContainerOptionElement = styled.button`
width:100%;
height:5em;
margin-top:2em;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`;
export const DivOption = styled.div`
background-color:#AC2D4A;
height:100%;
width:95%;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
border:2px solid black;
z-index:5;
`;
export const DivColor1 = styled.div`
background-color:#D29E48;
margin:1em;
width:80%;
height:100%;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
border-left: 2px solid black;
border-right: 2px solid black;

`;
export const DivColor2 = styled.div`
background-color:#218D53;
margin:1em;
height:100%;
width:90%;
border-radius:5px;
border-left: 2px solid black;
border-right: 2px solid black;
display:flex;
justify-content:center;
align-items:center;
`;
export const DivText = styled.div`
background-color:#FFFFFF;
height:80%;
width:90%;
border-radius:5px;
border: 4px solid #D29E48;
display:flex;
justify-content:center;
align-items:center;
font-size:${props=>props.tamaño}px;
color:#23273D;
`;
export const BorderOptionRight = styled.div`
background-color:black;
position:absolute;
z-index:0;
height:2.8em;
width:2em;
top:18px;
right:6px;
border-radius:8px;
`;
export const BorderOptionLeft = styled.div`
background-color:black;
position:absolute;
z-index:0;
height:2.8em;
width:2em;
top:18px;
left:6px;
border-radius:8px;
`;