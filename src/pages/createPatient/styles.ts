import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`;

export const Section = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    box-shadow: 0 0 0.25rem var(--light-gray-color);
`;

export const BottomForm = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 1rem;

    button{
        width: fit-content;
    }
`