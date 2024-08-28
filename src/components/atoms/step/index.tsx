import { Circle, StepWrapper } from "./styles";

export interface StepProps {
  label: string;
  status: "active" | "complete" | "incomplete";
  onClick: ()=>void;
}

export function Step({ ...props }: StepProps) {
  return (
    <StepWrapper status={props.status} onClick={props.onClick}>
      <Circle status={props.status} />
      <p>{props.label}</p>
    </StepWrapper>
  );
}
