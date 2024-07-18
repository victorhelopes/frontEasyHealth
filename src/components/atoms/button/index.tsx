import { StyledButton } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: 'contained' | 'text' | 'outlined' | 'link';
    color?: "success" | "error" | "primary" | 'light-gray'  
}

export function Button({ children, ...props }: ButtonProps){
    return(
        <StyledButton variant={props.variant} color={props.color} { ...props} disabled={props.loading}>
            {props.loading? <span  className="material-icons-outlined">autorenew</span> :
            children
        }
        </StyledButton>
    )
}