import { LabelText } from './styles'

export interface LabelProps {
    labelText: string
}

export function Label({ ...props }: LabelProps){
    return(
        <LabelText>
            {props.labelText}
        </LabelText>
    )
}