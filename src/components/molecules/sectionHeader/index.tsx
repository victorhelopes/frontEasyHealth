import { SectionTitle, TitleProps } from "../../atoms/sectionTitle"
import { SecitonAction, SectionHeaderStyled } from "./styles";

interface SectionHeaderProps extends TitleProps{
    edit?: ()=> void;
    remove?: ()=>void;
}

export function SectionHeader({ ...props }:SectionHeaderProps){
    return (
        <SectionHeaderStyled>
            <SectionTitle text={props.text}/>
            <SecitonAction>
                {props.edit && 
                    <span 
                        className="material-icons-outlined"
                        onClick={props.edit}
                    >
                        edit
                    </span>
                }
                {props.remove && 
                    <span 
                        className="material-icons-outlined"
                        onClick={props.remove}
                    >
                        delete
                    </span>
                }
            </SecitonAction>
        </SectionHeaderStyled>
    );
}