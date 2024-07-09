import { StyledInput } from './styles'

export interface InputProps{ 
    placeholder: string;
    value: string | number;
    setValue: (value: string | number ) => void;
}

export function Input({ ...props }: InputProps){
    return(
        <StyledInput
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e)=>{
                props.setValue(e.target.value)
            }}
        />
    )
}