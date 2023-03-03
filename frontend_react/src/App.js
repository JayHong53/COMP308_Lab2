import { useState, useEffect, useContext } from 'react'
import './styles.css';
import axios from 'axios'

import Header from './Header';
import Table from './Table';

function App() {

  const apiUrl = 'http://localhost:5050/api/student/';
  const [students, setStudents] = useState([]);

  const getAllStudents = () => {
    axios.get(apiUrl).then((res) => {
      setStudents(res.data);
    })
  }

  useEffect(() => {
    getAllStudents();
  },[])

  return (
    <>
      <Header />
      <div className='container-large'>
        <Table students={students} />
      </div>
    </>
  );
}

export default App;
