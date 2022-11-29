import React from "react";

interface HeadingsProps{
     headers : string[]
}

const TableHead = (props : HeadingsProps) => {
     return <tr>
          {props.headers.map((el, i) => <th key={el + i}>{el}</th>)}
     </tr>
}

export const Table : React.FC = () => {
     const headers: string[] = ["1", "2"] ;


     return <table>
          <TableHead headers={headers} />
     </table>
}