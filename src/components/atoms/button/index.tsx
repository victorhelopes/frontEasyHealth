import { StyledButton } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'text' | 'outlined' | 'link';
    color?: 'success' | 'error' | 'primary'
}

export function Button({ children, ...props }: ButtonProps){
    return(
        <StyledButton variant={props.variant} color={props.color}>
            {children}
        </StyledButton>
    )
}