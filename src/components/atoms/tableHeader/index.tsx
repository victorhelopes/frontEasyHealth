import { TableProps } from "../../molecules/table";
import { StyledTableHeader } from "./styles";

export function TableHeader({ ...props }: TableProps) {
    return (
        <StyledTableHeader>
            {props.data.length ? (
                Object.keys(props.data[0]).map((key) => <th key={key}>{key}</th>)
            ) : (
                <></>
            )}
        </StyledTableHeader>
    );
}
