import React from "react";
import './Table.scss'

const TableHead :React.FC<HeadingFieldsProps> = ({headers}) => {
     return <thead>
          <tr className='main-table__tr'>
               {headers.map((el, i) => <th key={el + i}>{el}</th>)}
          </tr>
     </thead>
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
          <tbody>
          {fields.map((el, i) => <TableRow key={i + el.lastname} country={el.country}
                                           city={el.city} firstname={el.firstname}
                                           lastname={el.lastname} email={el.email}/>)}
          </tbody>
     </table>
}