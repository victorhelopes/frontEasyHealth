import { Step } from "../../atoms/step";
import { StepperWrapper } from "./styles";

interface StepperProps {
    stepsLabels: string[];
    currentStep: number;
  }

export function Stepper({ ...props }:StepperProps){
    function stepStatus(step: number){
        if(props.currentStep === step) return 'active'
        if(props.currentStep < step) return 'complete'
        return 'incomplete'
    }

    return (
        <StepperWrapper>
        {
            props.stepsLabels.map((label, index) => {
                return(
                    <>
                        <Step
                        key={index}
                        status={stepStatus(index)}
                        label={label}
                        />
                        {index < props.stepsLabels.length - 1 && <hr/>}
                    </>
                )
            })
        }
      </StepperWrapper>
    )
} 