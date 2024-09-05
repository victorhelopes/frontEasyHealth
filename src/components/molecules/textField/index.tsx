import { StyledTextField } from './styles'

import { Input, InputProps } from "../../atoms/input";
import { Label, LabelProps } from "../../atoms/label";
import { ErrorMessage } from '../../atoms/errorMessage';

export interface TextFieldProps extends LabelProps, InputProps {
    status?: 'error' | 'default';
    errortext?: string;
    maxWidth?: string;
}

export function TextField({ ...props }: TextFieldProps){
    return(
        <StyledTextField { ...props} >
            <Label 
                labelText={props.labelText}
            />
            <Input
                placeholder={props.placeholder}
                value={props.value}
                { ...props }
            />
            { props.status === 'error' && props.errortext && 
                <ErrorMessage
                    errortext={props.errortext}
                />
            }
        </StyledTextField>
    )
}