import styled from "styled-components";

import { ButtonProps } from ".";
import { GetColor } from "../../../utils/getColor";

export const StyledButton = styled.button<ButtonProps>`
    background-color: ${({variant, color}) => {
        if(variant === 'text' || variant === 'outlined' || variant === 'link')
            return 'transparent'
        return GetColor(color)
        
    }};
    color: ${({variant, color}) =>{
        if(variant === 'text' || variant === 'outlined' || variant === 'link'){
            return GetColor(color)
        }
        if(color !== undefined) return 'white'
        return 'var(--primary-color)'
    }};
    
    border: ${({variant, color}) => {
        if(variant === 'outlined') return `1px solid ${GetColor(color)}`;
        else return 'none'
    }};
    border-radius: 0.5em;

    font-size: 1em;
    font-weight: bold;
    
    padding: 0.5em;
    width: ${({variant}) => {
        if(variant === 'text') return 'fit-content' 
        else return '100%'
    }};

    cursor: pointer;
`