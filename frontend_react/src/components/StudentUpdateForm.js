import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const StudentUpdateForm = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = 'http://localhost:5050/api/student/' + id;
    const [errors, setErrors] = useState([]);
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
        fetchData()
    }, [])
    
    const fetchData = async () => {
        const result = await axios(apiUrl);
        setStudent(result.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);
        axios.put(apiUrl, student)
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            setErrors(err.response.data.errors)
        });
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

                        <input className="form-input" type="text" placeholder="StudentNumber" name="studentNo"
                            value={student.studentNo} onChange={onChange} maxLength="9"/>
                        {errors.studentNo ? <div className="errorMessage-form">{errors.studentNo}</div> : <></>}


                        <input className="form-input" type="text" placeholder="FirstName" name="firstName"
                            value={student.firstName} onChange={onChange}/>
                        {errors.firstName ? <div className="errorMessage-form">{errors.firstName}</div> : <></>}


                        <input className="form-input" type="text" placeholder="LastName" name="lastName"
                            value={student.lastName} onChange={onChange}/>
                        {errors.lastName ? <div className="errorMessage-form">{errors.lastName}</div> : <></>}

                        {student.program === '' ? <div className="form-label" >Program</div> : <></>}
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
                        {errors.program ? <div className="errorMessage-form">{errors.program}</div> : <></>}

                        <input className="form-input" type="text" placeholder="Email" name="email" value={student.email} onChange={onChange} />
                        {errors.email ? <div className="errorMessage-form">{errors.email}</div> : <></>}

                        <input className="form-input" type="text" placeholder="Phone" name="phone" value={student.phone} onChange={onChange} />
                        {errors.phone ? <div className="errorMessage-form">{errors.phone}</div> : <></>}

                        <input className="form-input" type="text" placeholder="StreetAddress" name="street" value={student.street} onChange={onChange} />
                        {errors.street ? <div className="errorMessage-form">{errors.street}</div> : <></>}

                        <input className="form-input" type="text" placeholder="City" name="city" value={student.city} onChange={onChange} />
                        {errors.city ? <div className="errorMessage-form">{errors.city}</div> : <></>}

                        {student.province === '' ? <div className="form-label" >Province</div> : <></>}
                        <select className="form-select" name="province" value={student.province} onChange={onChange}>
                            <option value="">Province</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Yukon">Yukon</option>
                        </select>
                        {errors.province ? <div className="errorMessage-form">{errors.province}</div> : <></>}

                        <button className="form-button" type="submit">Submit</button>
                    </form>
                    <Link to={`/`}>
                        <button className="form-button-cancel">Back to List</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default StudentUpdateForm