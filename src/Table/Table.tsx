import React, {useEffect, useRef, useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import './Table.scss'
import autoAnimate from '@formkit/auto-animate'
import ReactLoading from "react-loading";
import ScrollButton from "../ScrollButton/ScrollButton";

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
     const [count, setCount] = useState<number>(10);
     const [isMore, setIsMore] = useState<boolean>(true);
     const [loaderData, setLoaderData]: [Fields[], Function] = useState<Fields[]>(fields.slice(0,15));
     const parentLoading = useRef<HTMLTableSectionElement>(null);
     const LOAD : number= 10;

     const loadMore = () => {
          setTimeout(() => {
               setCount(count + LOAD);
               setLoaderData(fields.slice(0, count + LOAD))
               if(fields.length < count + LOAD) setIsMore(false);
          }, 1000)
     }
     useEffect(() => {
          setIsMore(true)
          setLoaderData(fields.slice(0, 5))
     },[fields])

     useEffect(() => {
          if (parentLoading.current) {
               autoAnimate(parentLoading.current);
          }
     }, [parentLoading]);


     return (
         <InfiniteScroll dataLength={loaderData.length} hasMore={isMore}
                         loader={<ReactLoading type='bars' color="#a9a9a9" className='loading'/>} next={loadMore}
                         endMessage={<ScrollButton />}>
              <table className='main-table'>
                        <TableHead headers={headers} />
                        <tbody ref={parentLoading}>
                        {loaderData.map((el, i) => <TableRow key={i + el.lastname} country={el.country}
                                                             city={el.city} firstname={el.firstname}
                                                             lastname={el.lastname} email={el.email}/>)}
                        </tbody>
              </table>
         </InfiniteScroll>

)

}
export const Table = React.memo(TableMain)
