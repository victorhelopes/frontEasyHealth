import styled from "styled-components";

import { ButtonProps } from ".";
import { GetColor } from "../../../utils/getColor";

export const StyledButton = styled.button<ButtonProps>`
    cursor: pointer;

    text-decoration:  ${({variant}) =>{ 
        if(variant === 'link') return 'underline'
        return 'none'
    }};

    background-color: ${({variant, color, loading}) => {
        if(loading){
            return 'grey'
        }
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
    border-radius: 0.5rem;

    font-size: 1rem;
    font-weight: bold;
    
    padding: 0.5rem 1rem;
    width: ${({variant}) => {
        if(variant === 'text' || variant === 'link') return 'fit-content'
        else return '100%'
    }};

    span {
        font-size: 0.9rem
    }

    ${
        ({loading}) =>
        loading && `
        span { animation: spin 2s linear infinite}
        @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
        `
    }
`