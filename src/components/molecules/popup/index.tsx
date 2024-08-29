import { useEffect } from "react";
import { PopupStyled, PopupTitle } from "./styles";

interface PopupProps{
    title: string;
    text: string;
    isOpen: boolean;
    type: 'sucess'
    close: ()=> void;
}

export function Popup({ ...props }: PopupProps){

    useEffect(()=>{
        if(props.isOpen){
            setTimeout(()=>{
                props.close()
            }, 2000)
        }
    },[props])

    if(props.isOpen)
        return(
            <PopupStyled type={props.type}> 
                <PopupTitle>{props.title}</PopupTitle>
                <p>{props.text}</p>
            </PopupStyled>
        )
    return null
}