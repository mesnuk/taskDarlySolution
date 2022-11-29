import React from "react";


const TableHead :React.FC<HeadingFieldsProps> = ({headers}) => {
     return <tr className='main-table__tr'>
          {headers.map((el, i) => <th key={el + i}>{el}</th>)}
     </tr>
}

const TableRow : React.FC<Fields> = ({email, country,lastname,firstname,city}) => {
     return <tr className='main-table__tr'>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{email}</td>
          <td>{country}</td>
          <td>{city}</td>
     </tr>
}
;
export const Table : React.FC<{fields : Fields[], headers: string[]}> = ({ fields, headers}) => {


     return <table className='main-table'>
          <TableHead headers={headers} />
          {fields.map((el, i) => <TableRow key={i + el.lastname} country={el.country}
                                           city={el.city} firstname={el.firstname}
                                           lastname={el.lastname} email={el.email}/>)}
     </table>
}