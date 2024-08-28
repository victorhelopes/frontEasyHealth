import { SectionTitleStyled } from "./styles"

export interface TitleProps {
    text: string
}

export function SectionTitle({ ...props }: TitleProps){
    return(
        <SectionTitleStyled>{props.text}</SectionTitleStyled>
    )
}