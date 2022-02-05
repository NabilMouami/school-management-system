import React, {useEffect,useState} from 'react'

import axios from 'axios';

import './style.css'
function CardDashboard() {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:1000/teachers')
        .then(response => {
          setTeachers(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },[])
    useEffect(() => {
        axios.get('http://localhost:1000/students')
        .then(response => {
          setStudents(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },[])

    return (
        <div className="container crd">
            <div className="row">
            <div className="col-md-4 col-xl-3">
                <div className="card bg-c-blue order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Total Teacher</h6>
                    <h2 className="text-right"><i className="fas fa-chalkboard-teacher f-left"></i><span>{teachers.length}</span></h2>
                    <p className="m-b-0">Pending Teacher<span className="f-right">0</span></p>
                </div>
                </div>
            </div>
        
            <div className="col-md-4 col-xl-3">
                <div className="card bg-c-green order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Total Student</h6>
                    <h2 className="text-right"><i className="fas fa-user-graduate f-left"></i><span>{students.length}</span></h2>
                    <p className="m-b-0">Pending Students<span className="f-right">0</span></p>
                </div>
                </div>
            </div>
        
            <div className="col-md-4 col-xl-5">
                <div className="card bg-c-yellow order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Teachers Salary</h6>
                    <h2 className="text-right"><i className="fas fa-search-dollar f-left"></i><span>3000 DH</span></h2>
                    <p className="m-b-0">Pending Salary<span className="f-right">0</span></p>
                </div>
                </div>
            </div>
        
            </div>
      </div>
    
    )
}

export default CardDashboard
