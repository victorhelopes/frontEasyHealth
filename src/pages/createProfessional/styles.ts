import styled from "styled-components";

export const Title = styled.h1`
    font-size: 48px;
    margin: auto;
    margin-bottom: 1em;
    width: fit-content;
`;

export const Background = styled.div`
    background-color: var(--primary-color);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    background-color: white;
    padding: 1em;
    border-radius: 1em;
    width: 100%;
    max-width: 770px;
`;

export const Form = styled.form`
    max-width: 360px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;   
    margin-bottom: 2rem;

    button{
        margin-top: 1rem;
    }
`;