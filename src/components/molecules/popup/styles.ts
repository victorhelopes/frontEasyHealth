import styled from "styled-components";
import { GetColor } from "../../../utils/getColor";

export const PopupStyled = styled.div<{type: 'sucess'}>`
    background-color: ${({type})=> {
        if(type === 'sucess') return GetColor('success');
    }};
    color: ${({type})=> {
        if(type === 'sucess') return 'white';
    }};;
    box-shadow: 0 0 1rem var(--gray-color);
    padding: 1rem;
    position: absolute;
    right: 1rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 30rem;
`;

export const PopupTitle = styled.h2`
    margin: 0;
`;