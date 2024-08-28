import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { StyledSelect } from "./styles";

export interface OptionProps {
  label: string;
  value: string | number;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
}

export function Select({ ...props }: SelectProps) {
  return (
    <StyledSelect value={props.value} onChange={props.onChange}>
      {props.options.map((option) => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </StyledSelect>
  );
}
