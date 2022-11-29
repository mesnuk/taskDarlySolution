import React from "react";

interface HeadingsProps{
     headers : string[]
}

const TableHead : React.FC<HeadingsProps> = ({headers}) => {
     return <tr className='main-table__tr'>
          {headers.map((el, i) => <th key={el + i}>{el}</th>)}
     </tr>
}

const TableRow : React.FC<{fields : string}> = ({fields}) => {
     return <tr className='main-table__tr'>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
     </tr>
}

export const Table : React.FC<{ props: string[] }> = ({props}) => {
     const headers: string[] = ["1", "2"] ;


     return <table className='main-table'>
          <TableHead headers={headers} />
          {props.map((el, i) => <TableRow key={i + el} fields={el}/>)}
     </table>
}