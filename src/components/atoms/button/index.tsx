import { StyledButton } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: 'contained' | 'text' | 'outlined' | 'link';
    color?: "success" | "error" | "primary" | 'light-gray';
    width?: 'fit-content';
}

export function Button({ children, ...props }: ButtonProps){
    return(
        <StyledButton 
            variant={props.variant}
            color={props.color}
            disabled={props.loading}
            { ...props}
        >
            {props.loading? <span  className="material-icons-outlined">autorenew</span> :
            children
        }
        </StyledButton>
    )
}