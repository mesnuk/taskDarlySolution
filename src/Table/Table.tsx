import React, {useEffect, useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
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

const TableMain : React.FC<{fields : Fields[], headers: string[]}> = ({ fields, headers}) => {
     const [count, setCount] = useState(10);
     const [isMore, setIsMore] = useState(true);
     const [loaderData, setLoaderData]: [Fields[], Function] = useState<Fields[]>(fields.slice(0,10));
     const LOAD = 5;

     const loadMore = () => {
          setTimeout(() => {
               setCount(count + LOAD);
               setLoaderData(fields.slice(0, count + LOAD))
               if(fields.length < count + LOAD) setIsMore(false);
          }, 1000)
     }
     useEffect(() => {
          setIsMore(true)
          setLoaderData(fields.slice(0, 10))
     },[fields])


     return (
         <InfiniteScroll dataLength={loaderData.length} hasMore={isMore}
                         loader={<h1>Loading.... </h1>} next={loadMore}
                         endMessage={<h1>No more data;)</h1>}>
              <table className='main-table'>
                        <TableHead headers={headers} />
                        <tbody>
                        {loaderData.map((el, i) => <TableRow key={i + el.lastname} country={el.country}
                                                             city={el.city} firstname={el.firstname}
                                                             lastname={el.lastname} email={el.email}/>)}
                        </tbody>
              </table>
         </InfiniteScroll>

)

}
export const Table = React.memo(TableMain)
