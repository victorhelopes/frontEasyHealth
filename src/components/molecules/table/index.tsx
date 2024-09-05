import { ReactNode } from "react";

import { TableBody } from "../../atoms/tableBody";
import { TableHeader } from "../../atoms/tableHeader";

import { StyledBorderTables, StyledTable } from "./styles";

interface TableRow {
    [key: string]: string | ReactNode;
}
  
export interface TableProps {
  data: TableRow[];
  withActions?: boolean
}

export function Table({ ...props }: TableProps){
    return(
        <StyledBorderTables>
            <StyledTable { ...props }>
                <TableHeader
                    data={props.data}
                />
                <TableBody
                    data={props.data}
                />
            </StyledTable>
        </StyledBorderTables>
    )
}