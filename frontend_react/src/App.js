import { useState, useEffect, useContext } from 'react'
import './styles.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes
} from "react-router-dom";
import axios from 'axios'

import Header from './components/Header';
import Home from './components/Home';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import StudentAddForm from './components/StudentAddForm';
import StudentUpdateForm from './components/StudentUpdateForm';

function App() {
  return (
    <>
      <Header />
      <div className='container-large'>
        <div>
          <Router>
            <Routes>
              <Route index element={<StudentList />} />
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<StudentList />} />
              <Route path="/add" element = { <StudentAddForm /> } />
              <Route path="/show/:id" element = { <StudentDetail /> } />
              <Route path="/update/:id" element = { <StudentUpdateForm /> } />
            </Routes>
          </Router>
        </div>
      </div>

    </>
  );
}

export default App;
