import './styles.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentAddForm from './components/StudentAddForm';
import StudentUpdateForm from './components/StudentUpdateForm';
import StudentDetail from './components/StudentDetail';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container-large'>
          <div>
            <Routes>
              <Route index element={<StudentList />} />
              <Route path="/" element={<StudentList />} />
              <Route path="/add" element={<StudentAddForm />} />
              <Route path="/detail/:id" element={<StudentDetail />} />
              <Route path="/update/:id" element={<StudentUpdateForm />} />
            </Routes>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
