import { TableProps } from "../../molecules/table";

export function TableBody({ ...props }: TableProps) {
    return (
        <>
            {
                props.data.map((data)=>{
                    return(
                        <tr>
                            {Object.values(data).map((value)=>{
                                    return <td>{value}</td>
                            })}
                        </tr>
                    )
                })
            }
        </>
    );
}
