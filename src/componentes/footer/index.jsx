import { Link } from 'react-router-dom';
import VinchaNinja from '../../assets/heroIcon.jpg'
import NineTails from '../../assets/NineTailsIcon.png'
import History from '../../assets/storyIcon.png'
import Adventure from '../../assets/adventure.png'
import City from '../../assets/city.png'
import { FooterStyle,ContainerFooter,Arrow,ButtonLucky,PButtonLucky } from './styled'
import flecha from '../../assets/flecha.png'
import { useEffect, useState } from 'react';

function footerUser({typeF, setChange,lucky, setLucky}){
    useEffect(()=>{
        
    },[setLucky])
    let select = lucky
    const menu = "menu";
    const buttonsEvent = ["Lucky Adivination","Faction Recruit",
    "Shinobi God Recruitment","Spirit Prayer"]
    buttonsEvent.map(elem=>{
        if(lucky===elem ){
            select = elem
        }
    })
    const Footer = [
        {FooterUser:
            <footer className='fondoHeader z-50 flex items-end justify-around border-black border-solid border h-24 bottom-0 left-0 right-0 fixed bg-orange-900'>
                <Link to={'/city'} className='relative h-5/6 flex flex-col'>
                    <img className='h-4/5 w-20 	' src={City} alt="" />
                    <p className='absolute text-slate-200 left-4 font-sans	bottom-1 font-semibold'>City</p>
                </Link>
                <Link to={'/adventure'} className='relative h-5/6 flex flex-col'>
                    <img className='h-4/5 w-20 	' src={Adventure} alt="" />
                    <p className='absolute text-slate-200 left-1 font-sans	bottom-2 font-semibold'>Adventure</p>
                </Link>
                <Link to={'/home'} className='relative h-5/6 flex flex-col'>
                    <img className='h-full w-24' src={History} alt="" />
                    <p className='absolute text-slate-200 left-5 font-sans	top-7 font-semibold'>History</p>
                </Link>
                <Link to={'/ninjas'} className='relative h-5/6 flex flex-col'>
                    <img className='h-full pb-2' src={VinchaNinja} alt="" />
                    <p className='font-sans text-slate-200 absolute bottom-2 left-5 font-semibold'>Hero</p>
                </Link>
                <Link to={'/beast'} className='relative h-5/6 flex flex-col'>
                    <img className='h-4/5 pb-1' src={NineTails} alt="" />
                    <p className='font-sans text-slate-200 w-full font-semibold absolute bottom-2 left-1'>Tailed Beast</p>
                </Link>
            </footer>
        },
        {FooterLucky:
            <FooterStyle>
                <ContainerFooter>
                    <Arrow src={flecha} onClick={()=>{setChange(menu); setLucky("Lucky Adivination");}}/>
                        {
                        buttonsEvent.map(elem=>{
                            const ConditionBorder = elem===select ? "2px solid rgba(234, 190, 63, 0.6)" : null;
                            const ConditionShadow = elem===select ? "rgba(234, 190, 63, 0.9) 1px 2px" : "2px 2px rgb(0 0 0 / 70%)";
                            const ConditionColor = elem===select ? "rgba(234, 190, 63)" : "#785A48";
                                return(
                                    <ButtonLucky key={elem}  border={ConditionBorder} shadow={ConditionShadow} onClick={()=>{setLucky(elem)}}>
                                        <PButtonLucky color={ConditionColor}>
                                            {elem}
                                        </PButtonLucky>
                                    </ButtonLucky> 
                                ) 
                        })
                        }
                </ContainerFooter>
            </FooterStyle>
        }
    ]
    const typeFooter = Footer.filter(elem=>{
        const FooterElement = Object.keys(elem)[0]
        return typeF === FooterElement
    })
    const FooterSelect = Object.keys(typeFooter[0])[0]
    return(
        FooterSelect==="FooterUser" ? typeFooter[0].FooterUser : null || 
        FooterSelect==="FooterLucky" ? typeFooter[0].FooterLucky : null 
    )
}
export default footerUser;