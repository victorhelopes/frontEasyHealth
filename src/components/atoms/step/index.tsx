import { Circle, StepWrapper } from "./styles";

export interface StepProps {
    label: string;
    status: 'active' | 'complete' | 'incomplete';
}

export function Step({ ...props }: StepProps){
    return (
        <StepWrapper status={props.status}>
            <Circle status={props.status}/>
            <p>{props.label}</p>
        </StepWrapper>
    )
}