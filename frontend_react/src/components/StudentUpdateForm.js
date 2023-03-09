import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const StudentUpdateForm = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = 'http://localhost:5050/api/student/' + id;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [student, setStudent] = useState({
        studentNo: '',
        firstName: '',
        lastName: '',
        program: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        province: ''
    })

    useEffect(() => {
        console.log(id)
        const fetchData = async () => {
            const result = await axios(apiUrl);
            setStudent(result.data)
        }
        fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);
        axios.put(apiUrl, {"student": student})
        .then(() => {
            navigate('/');
        })
    }

    const onChange = (e) => {
        e.persist();
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container-small">
                <div className="form-box">
                    <div className="form-title">Update Student</div>
                    <form className="register-form" onSubmit={handleSubmit}>

                        <input className="form-input" type="text" placeholder="StudentNumber" name="studentNo" value={student.studentNo} onChange={onChange} />

                        <input className="form-input" type="text" placeholder="FirstName" name="firstName" value={student.firstName} onChange={onChange} />

                        <input className="form-input" type="text" placeholder="LastName" name="lastName" value={student.lastName} onChange={onChange} />

                        <select className="form-select" name="program" value={student.program} onChange={onChange}>
                            <option value="">Program</option>
                            <option value="Software Engineering Technology">
                                Software Engineering Technology
                            </option>
                            <option value="AI Programming">AI Programming</option>
                            <option value="Game Programming">Game Programming</option>
                            <option value="Health Informatic Technology">
                                Health Informatic Technology
                            </option>
                        </select>

                        <input className="form-input" type="text" placeholder="Email" name="email" value={student.email} onChange={onChange} />

                        <input className="form-input" type="text" placeholder="Phone" name="phone" value={student.phone} onChange={onChange} />

                        <input className="form-input" type="text" placeholder="StreetAddress" name="street" value={student.street} onChange={onChange} />

                        <input className="form-input" type="text" placeholder="City" name="city" value={student.city} onChange={onChange} />

                        <div className="form-label" >Province</div>
                        <select className="form-select" name="province" value={student.province} onChange={onChange}>
                            <option value="">Province</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NT">NT</option>
                            <option value="NS">NS</option>
                            <option value="NU">NU</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                            <option value="YT">YT</option>
                        </select>

                        <button className="form-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default StudentUpdateForm