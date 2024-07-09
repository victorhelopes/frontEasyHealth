import { StylederrorMessage } from './styles'

export interface errorMessageProps{ 
    errortext: string;
}

export function ErrorMessage({ ...props }: errorMessageProps){
    return(
        <StylederrorMessage>
            {props.errortext}
        </StylederrorMessage>
    )
}