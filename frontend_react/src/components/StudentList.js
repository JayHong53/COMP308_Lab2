import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const apiUrl = 'http://localhost:5050/api/student/';
    const [searchVal, setSearchVal] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [students, setStudents] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState();

    useEffect(() => {
        fetchData();
    }, [])

    // Fetch Data
    const fetchData = async () => {
        axios.get(apiUrl).then((res) => {
            setStudents(res.data);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(res => {
                console.log(res);
                fetchData();
            })
            .catch(err => {
                console.log(err);
            })
        setShowDeleteModal(false);
    }

    const openDeleteModal = (student) => {
        setStudentToDelete(student);
        setShowDeleteModal(true);
    }

    const handleSearchByUserId = () => {
        if (searchVal === "" || searchCategory === "") {
            alert("Please, enter a search criteria");
        }
        else {
            const filteredStudents = students.filter((student) => {
                if (searchCategory === "Student #") {
                    return student.studentNo.toString().includes(searchVal);
                } else if (searchCategory === "Name") {
                    const fullName = `${student.firstName} ${student.lastName}`;
                    return fullName.toLowerCase().includes(searchVal.toLowerCase());
                } else if (searchCategory === "Program") {
                    return student.program.toLowerCase().includes(searchVal.toLowerCase());
                }
                return false;
            });
            setStudents(filteredStudents);
        }
    }

    // Reload the table 
    const handleCancelSearch = () => {
        setSearchVal('');
        setSearchCategory('');
        fetchData();
    }

    return (
        <div className='table-box'>
            <div className='form-title'>Student List</div>

            {/* Search Bar  */}
            <div className="searchBar">
                <select name="searchCategory" value={searchCategory} onChange={(e) => { setSearchCategory(e.target.value) }}>
                    <option value=''>Search By</option>
                    <option>Student #</option>
                    <option>Name</option>
                    <option>Program</option>
                </select>
                <input name="input-searchByVal" value={searchVal} onChange={(e) => { setSearchVal(e.target.value) }} type="text"></input>
                <button className="btn-searchById" name="btn-searchById" onClick={handleSearchByUserId}>Search</button>
                <button id="searchBar-button-cancel" name="btn-searchById-cancel" onClick={handleCancelSearch}>Reset</button>
            </div>
            {/* Search Bar End */}

            {/* Displaying No Student message */}
            {students.length == 0 ? (

                // Condition: No student
                <div className="nostudent-message">
                    <div>No Matching Data Found</div>
                </div>
            ) : (

                // Condition: Students retrieved
                <>
                    {/* Table Start  */}
                    <table>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Name</th>
                                <th>Program</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.studentNo} >
                                    <td>{student.studentNo}</td>
                                    <td>{`${student.firstName} ${student.lastName}`}</td>
                                    <td>{student.program}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td className="td-button">
                                        {/* <Link to={`/view/${student._id}`}>
                                    <button className="table-button-view">View</button>
                                </Link> */}
                                        <Link to={`/update/${student._id}`}>
                                            <button className="table-button-update">Update</button>
                                        </Link>

                                        {/* Delete Confirmation Modal */}
                                        <button className="table-button-delete" onClick={() => openDeleteModal(student)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal
                        isOpen={showDeleteModal}
                        student={studentToDelete}
                        onChoosingYes={() => handleDelete(studentToDelete._id)}
                        onChoosingNo={() => setShowDeleteModal(false)}>
                        Do you want to delete the student?
                    </Modal>
                    {/* Table End */}
                </>
            )}

            {/* Add button Start  */}
            <div className="add-button-container">
                <Link to={`/add`}>
                    <button className="form-button">Add Student</button>
                </Link>
            </div>
            {/* add button end */}
        </div>
    );
};

export default StudentList;
