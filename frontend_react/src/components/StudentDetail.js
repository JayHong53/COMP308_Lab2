import axios from "axios"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetail = () => {
    let { id } = useParams();
    const apiUrl = 'http://localhost:5050/api/student/' + id;

    const [student, setStudent] = useState({
        studentNo: '',
        firstName: '',
        lastName: '',
        program: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        province: '',
    })

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const result = await axios(apiUrl);
        setStudent(result.data)
    }

    return (
        <>
            <div className='detail-box'>
                <div className='form-title'>Student Detail</div>

                <table>
                    <thead>
                        <th>Category</th>
                        <th>Student Info</th>
                    </thead>
                    <tr>
                        <td className="detail-category">Student No.</td>
                        <td className="detail-value">{student.studentNo}</td>
                    </tr>
                    <tr>
                        <td className="detail-category">Full Name</td>
                        <td className="detail-value">{student.firstName} {student.lastName}</td>
                    </tr>
                    <tr>
                        <td className="detail-category">Program</td>
                        <td className="detail-value">{student.program}</td>
                    </tr>
                    <tr>
                        <td className="detail-category">Email</td>
                        <td className="detail-value">{student.email}</td>
                    </tr>
                    <tr>
                        <td className="detail-category">Phone</td>
                        <td className="detail-value">{student.phone}</td>
                    </tr>
                    <tr>
                        <td className="detail-category">Address</td>
                        <td className="detail-value">{student.street}, {student.city}, {student.province}</td>
                    </tr>
                </table>
                <Link to={"/"}>
                    <button className="form-button">Back to List</button>
                </Link>
            </div>
        </>
    )
}

export default StudentDetail