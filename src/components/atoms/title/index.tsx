import { TitleStyled } from "./styles"

interface TitleProps {
    text: string
}

export function Title({ ...props }: TitleProps){
    return(
        <TitleStyled>{props.text}</TitleStyled>
    )
}