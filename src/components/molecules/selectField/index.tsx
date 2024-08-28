import { Label, LabelProps } from "../../atoms/label";
import { Select, SelectProps } from "../../atoms/select";
import { StyledSelectField } from "./styles";

interface SelectFieldProps extends LabelProps, SelectProps {
    status?: 'error' | 'default';
    errortext?: string;
}

export function SelectField({ ...props }: SelectFieldProps) {
  return (
    <StyledSelectField>
      <Label labelText={props.labelText} />
      <Select
        options={props.options}
        onChange={props.onChange}
        value={props.value}
      />
    </StyledSelectField>
  );
}
