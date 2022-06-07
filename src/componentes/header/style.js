import styled from 'styled-components'
import Fondo from '../../assets/FondoLuckyAdivination.jpg'

export const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    background-color:#674225;
    width:100%;
    height:3em;
    display:flex;
    justify-content:center;
    `;
    export const ContainerValues = styled.div`
    background-color:rgb(14, 14, 14);
    display:flex;
    width:90%;
    border-radius:0.8em;
    justify-content:space-around;
    align-items:center;
`;

export const PName = styled.div`
background-color: rgba(54, 30, 2,0.5);
color:white;
border-radius:5px;
width:7em;
height:min-content;
`;

export const ContainerMoney = styled.div`
background-color: rgba(54, 30, 2,0.5);
color:white;
border-radius:5px;
width:${prop => prop.width}em;
height:min-content;
position:relative;
text-align: center;
margin-right:${prop => prop.margin}px;

`;
export const ImgCofre = styled.img`
src:url(${props=>props.src});
position:absolute;
height:30px;
top:-5px;
left:-25px;
`;
export const ImgGem = styled.img`
position:absolute;
height:35px;
top:-7px;
left:-15px;
src:url(${props=>props.src})
`;
export const ImgScrollBlue = styled.img`
position:absolute;
height:40px;
width:20px;
top:-7px;
left:-15px;`;
export const BarraContainer = styled.div`
width:99%;
height:5px;
background-color:#322223;
`;
export const BarraExp = styled.div`
height:100%;
background-color:#F2B33D;
border-radius:inherit;
width:${prop => prop.props}%;
`;