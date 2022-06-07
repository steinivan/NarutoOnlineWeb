import styled from 'styled-components'
import flecha from '../../assets/flecha.png'
export const FooterStyle = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:2em;
    display:flex;
    justify-content:center;
    background-color:#2C0804;
`;
export const ContainerFooter = styled.div`
    width:100%;
    height:4em;
    display:flex;
    position:absolute;
    left:0;
    bottom:70%;
    justify-content:space-around;
    align-items:end;
`;
export const Arrow = styled.img`
src:url(${props=>props.src});
height:2.8rem;
`;
export const ButtonLucky = styled.div`
height:3rem;
width:20%;
min-width:3.5rem;
background-color:#322520;
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;
box-shadow:${props=>props.shadow};
border:${props=>props.border};
`;
export const PButtonLucky = styled.p`
-webkit-text-stroke: 1px black;
color:${props=>props.color};
width:min-content;
text-align:center;
`;