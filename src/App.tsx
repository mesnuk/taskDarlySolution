import React, {useEffect, useMemo, useRef, useState} from 'react';
import './App.scss';
import axios from "axios";
import {Table} from "./Table/Table";
import {Form} from "./Form/Form";
import Snowfall from 'react-snowfall'
function App() {
    const [users, setUsers] : [Fields[], Function] = useState([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);
    const [headers, setHeaders] : [string[], Function] = useState([]);
    const getUsers = () : void => {
        axios.get('http://localhost:3001/users').then<Fields[]>(res => res.data).then(data => setUsers(data))
            .catch(err => alert(err)).then(() => setIsLoaded(true))   }
    const getHeaders = () : void => {
        axios.get('http://localhost:3001/headers').then<string[]>(res => res.data).then(data => setHeaders(data))
            .catch(err => alert(err))}

    useEffect(() => {
        getUsers();
        getHeaders();
    },[])

  return (
        <div className="App">
            <Form setUsers={setUsers} />
            {isLoaded &&
            <Table headers={headers} fields={users}/>}
            <Snowfall color='#a9a9a9' />
        </div>
  );
}

export default App;
