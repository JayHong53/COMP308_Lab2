import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const StudentList = () => {

    const apiUrl = 'http://localhost:5050/api/student/';
    const [students, setStudents] = useState([]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            axios.delete(`${apiUrl}/${id}`)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        const fetchDate = async () => {
            axios.get(apiUrl).then((res) => {
                setStudents(res.data);
            })
        }
        fetchDate();
    }, [handleDelete])

    return (
        <div className='table-box'>
            <div className='form-title'>All Students</div>

            {/* Displaying No Student message */}
            {students.length == 0 ? (
                <div className="nostudent-message">
                    <div> You have no Students</div>
                </div>
            ) : (
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
                                <td>
                                    {/* <Link to={`/view/${student._id}`}>
                                    <button className="table-button-view">View</button>
                                </Link> */}
                                    <Link to={`/update/${student._id}`}>
                                        <button className="table-button-update">Update</button>
                                    </Link>
                                    <button className="table-button-delete" onClick={() => handleDelete(student._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>)}
            <div className="add-button-container">
                <Link to={`/add`}>
                    <button className="form-button">Add Student</button>
                </Link>
            </div>
        </div>
    );
};

export default StudentList;
