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
    padding: 2em;
    border-radius: 1em;
    width: 100%;
    max-width: 600px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Form = styled.form`
    width: 100%;
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