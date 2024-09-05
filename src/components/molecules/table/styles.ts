import styled from "styled-components";
import { TableProps } from ".";

export const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  border-radius: 1rem;

  th,
  td {
    padding: 0.6rem 0.6rem;
    text-align: start;
  }


  
  tr td:last-child {
    width: ${({withActions}) =>{
        if(withActions)
        return '1%'
    }};
    white-space: nowrap;
  }

  overflow: hidden;
`;

export const StyledBorderTables = styled.div`
  border: 0.1rem solid var(--light-gray-color);
  border-radius: 1.1rem;
`;
