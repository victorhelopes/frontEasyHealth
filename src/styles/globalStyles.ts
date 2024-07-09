import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #4864E0;
        --primary-light-color: #E0E6FF;

        --light-gray-color: #C6C6C6;

        --success-color: #04BB00;
        --error-color: #FF0000;
    }
    
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`;