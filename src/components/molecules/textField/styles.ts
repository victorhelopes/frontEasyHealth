import styled from "styled-components";
import { TextFieldProps } from ".";

export const StyledTextField = styled.div<TextFieldProps>`
    display: flex;
    flex-direction: column;

    width: 100%;

    max-width: ${({maxWidth})=>{
        if(maxWidth) return maxWidth;
        return '100%';
    }};

    label {
        margin-bottom: 0.5em;
    }
`;