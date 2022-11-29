import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "./Table/Table";
import axios from "axios";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const dataUsers = axios.get('http://localhost:3001/users').then(res => res.data)
        console.log(dataUsers)
        const dataHeaders = axios.get('http://localhost:3001/headers')

        setUsers(dataUsers);
    },[])

  return (
    <div className="App">
        <Table />
    </div>
  );
}

export default App;
