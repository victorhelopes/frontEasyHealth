import { StyledLink } from "./styles";

export interface LinkProps extends React.LinkHTMLAttributes<HTMLLIElement> {}

export function Link({ children, ...props}: LinkProps){
    return(
        <StyledLink href={props.href}>
            {children}
        </StyledLink>
    )
}