import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { load } from '../../../redux/userSlice';
import './style.css'
function Attendance() {
    const [students,setStudents] = useState([]);
    const [menuStudents, setMenuStudents] = useState([]);
  
    const dispatch = useDispatch();
    const handleLoad = (current) => {
      dispatch(load(current));
     }
  

    useEffect(() =>{
        axios.get('http://localhost:1000/students/').then(response => {
            setStudents(response.data);
        });
     },[]);

     const filterStudent = (e) => {
        const newStudents = students.filter((student) => student.Grade === e.target.value);
        setMenuStudents(newStudents);
      } 
      const Student = props => (
        <tr>
          <td>{props.students.Fullname} {props.students.Lastname}</td>
          <td>{props.students.Cne}</td>
          <td><Link to="/admin-attendance/take-attendance">  <button className='view'  onClick={() => handleLoad(props.students)}>Attendance</button></Link></td>
          <td>
           <Link to="/admin-attendance/list-attendance">  <button className='view'>View</button></Link>
          </td>
        </tr>
      )
   const StudentsList = () => {
        return menuStudents.map(currentStudent=> {
            return <Student  students={currentStudent} key={currentStudent._id}/>;
        })
    };
    return (
        <div class="row atten">

                <div class="panel panel-primary">
                <div class="panel-heading">
                    <h6 class="panel-title">Attendance</h6>
            
                </div>
                <h3>Logged Students</h3>
                    <select onChange={filterStudent}>
                        {students.map((grade) => {

                        return <option 
                            key={grade}
                            value={grade.Grade}
                            >{grade.Grade}
                            </option>;

                        })}
                    </select>
                 <table class="table table-hover tableau" id="dev-table">
                    <thead>
            
                    <tr>
                        <th>Student Name</th>
                        <th>Cne</th>
                        <th>Take Attendance</th>
                        <th>View Attendance</th>
                    </tr>
                    </thead>
                    <tbody>
                        {StudentsList()}
                    </tbody>
                        
                   
                 </table>
                </div>
    
    
      </div>
    )
}

export default Attendance
