import styled from 'styled-components'
import Fondo from '../../assets/FondoLuckyAdivination.jpg'

export const Bg=styled.div`
    background:url(${Fondo});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    background-position:center;
    height:100%;
    display:flex;
    justify-content:center;
    padding:4rem 0;
    padding-bottom:6rem;
    `;

export const Button=styled.button`
    height:2em;
    width:8em;
    border-radius:1em;
    background-color:gold;
`;

export const DivGuaranted=styled.div`
    height:4em;
    width:100%;
    margin-bottom:2em;
    display:flex;
    justify-content:space-around;
`;
export const DivGuarantedSelect=styled.div`
    height:4em;
    width:100%;
    display:flex;
    justify-content:space-around;
    z-index:100;
`;
export const GuarantedSelectSSR = styled.div`
    height:1.7em;
    width:4em;
    border-radius:5px 5px 0px 0px;
    background-color:#372821;
    text-align:center;
`;
export const GuarantedInput = styled.div`
    padding:${props=>props.padding};
    width:${props=>props.width};
    border-radius:3px;
    background-color:${props=>props.background};
    text-align:center;
`;
export const DivGuarantedInput = styled.div`
    height :${props=>props.height};
    width:${props=>props.width};
    border-radius:5px 5px 0px 0px;
    top:-35%;
    position:absolute;
    left:0;
    z-index:101;
    display:flex;
    justify-content:space-around;
    `;

export const ContainDivGuarantedSelect=styled.div`
    z-index:100;
    height:6em;
    width:100%;
    display:flex;
    background-color:#7C6E65;
    align-items:center;

    `;
    export const ContainDivGuarantedSelected=styled.div`
    z-index:100;
    padding:1em;
    height:12em;
    width:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:30%;
    left:5%;
    background-color:#C4B4A4;
    flex-direction:column;
`;
export const ContainerGuaranted=styled.div`
    border:3.3px solid purple;
    border-radius:3px;
    height:100%;
    width:4em;
    overflow: hidden;
`;
export const ContainerGuarantedSelect=styled.div`
    border:3.3px solid orange;
    border-radius:3px;
    height:4em;
    width:4em;
    overflow: hidden;
`;

export const ImgGuaranted=styled.img`
    src=url(${props=>props.src});
    object-fit:contain;
    height:100%;
    width:100%;
    transform: scale(3);
    object-position:${props=>props.position};
`;

export const BgContainerSelect=styled.div`
z-index:99;
height:100%;
width:100%;
background-color:#000000cc;
position:absolute;
top:0;
`
export const ContainerSelect=styled.div`
    background-color:#D5CEB4;
    border:2px solid black;
    border-bottom:8px solid black;
    height:100%;
    width:100%;
    display:grid;
    justify-items:center;
    grid-template-columns:repeat(6,1fr);
    grid-gap:5px;
    padding:1em 0;
    overflow: hidden;
    overflow-y: scroll;
    z-index:100;
`;
