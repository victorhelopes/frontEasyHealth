import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #4864E0;
        --primary-light-color: #E0E6FF;

        --light-gray-color: #C6C6C6;
        --gray-color: #303030;

        --success-color: #04BB00;
        --error-color: #FF0000;
    }
    
    html,
    body, #root {
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`;

export const Container = styled.main`
    padding: 1rem;
`;

export const Row = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;