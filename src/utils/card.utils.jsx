import { useState, useContext, useEffect } from 'react';
import { cardApi } from '../services'
import { AiFillStar } from 'react-icons/ai'
import { GiSevenPointedStar } from 'react-icons/gi'
export const cardSSR = (valor,category, product)=>{
    return product.filter(function(e){
        const nombre = e.name.toLocaleLowerCase()
        const categoria = e.category.toLocaleLowerCase()
            return categoria === category.toLocaleLowerCase()   
        // return nombre === valor.toLocaleLowerCase() && categoria === category.toLocaleLowerCase() || nombre === valor.toLocaleLowerCase() && category == ""
    });
}



export const StarCard = ({star})=>{
    const arr = []
    let classCenter
    const starRed = star-10
    for (let index = 0; index < star; index++) {
        if(star<=9){
            if(index<=4){
                arr.push(<AiFillStar key={index} className="text-2xl text-yellow-400"/>)       
            } 
            if(index<=10 && index>=5) {
                arr[index-5]= <AiFillStar key={index} className="text-2xl text-red-600"/>
            }
            if(star===1)    classCenter = "left-16 "
            if(star===2)    classCenter = "left-14 "
            if(star===3)    classCenter = "left-10 "
            if(star===4)    classCenter = "left-7 "
            if(star>=5)    classCenter = "left-5 "
            
        }else{
            if(index>=9){
            arr[0] = <GiSevenPointedStar key={index} className="z-1 bottom-0 absolute text-3xl w-10 text-red-600"/>
            arr[1] = <p className="z-5 bottom-1 absolute font-semibold left-4">{starRed === 0 ? '' : `${starRed}` }</p>
            classCenter = "left-14"
            }    
        }
        
    }
    return (
        <div className={"flex absolute bottom-0 "+`${classCenter}`} >
            {
                arr.map(elem => elem)
            }
        </div>
        )
}