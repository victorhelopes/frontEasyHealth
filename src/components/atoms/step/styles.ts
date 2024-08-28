import styled from "styled-components";
import { StepProps } from ".";

export const StepWrapper = styled.div<{status: StepProps['status']}>`
    display: flex;
    align-items: center;
    cursor: pointer;

    p{
        font-weight: ${({status})=> {
            if(status === 'active') return 'bold'
            return 'normal'
        }};
        margin: 0;
    }
`;

export const Circle = styled.div<{status: StepProps['status']}>`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    
    background: ${({status})=> {
            if(status === 'complete') return 'var(--primary-color)'
            if(status === 'active') return 'var(--primary-light-color)'
            return 'white'
        }}; 

    
    border-radius: 50%;
    border: 1px solid ${({status})=> {
            if(status === 'incomplete' ) return 'var(--light-gray-color)'
            return ' var(--primary-color)'
        }}; 
`;