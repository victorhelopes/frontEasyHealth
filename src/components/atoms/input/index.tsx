import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{ }

export function Input({ ...props }: InputProps){
    return(
        <StyledInput
            placeholder={props.placeholder}
            value={props.value}
            { ...props }
        />
    )
}