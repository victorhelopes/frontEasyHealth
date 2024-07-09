import { StyledTextField } from './styles'

import { Input, InputProps } from "../../atoms/input";
import { Label, LabelProps } from "../../atoms/label";
import { ErrorMessage, errorMessageProps } from '../../atoms/errorMessage';

interface TextFieldProps extends LabelProps, InputProps, errorMessageProps {
    status?: 'error' | 'default'
}

export function TextField({ ...props }: TextFieldProps){
    return(
        <StyledTextField>
            <Label 
                labelText={props.labelText}
            />
            <Input
                placeholder={props.placeholder}
                value={props.value}
                setValue={props.setValue}
            />
            { props.status === 'error' && 
                <ErrorMessage
                    errortext={props.errortext}
                />
            }
        </StyledTextField>
    )
}