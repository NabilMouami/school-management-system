import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './style.css'

const StudentsList = () => {
    const [students,setStudents] = useState([]);
    console.log(students);
 
    const [grd,setGrd] = useState('')
    const [menuStudents, setMenuStudents] = useState([]);
    console.log(menuStudents);

    useEffect(() =>{
       axios.get('http://localhost:1000/students/').then(response => {
           setStudents(response.data);
       });
    },[]);
    useEffect(()=>{
      if(students && students.length>0){
      setGrd(students[0].Grade);}
      },[grd])
    const Student = props => (
        <tr>
         <td>{props.students.Cne}</td>
          <td>{props.students.Cni}</td>
          <td>{props.students.Grade}</td>
          <td>{props.students.Fullname}</td>
          <td>{props.students.Email}</td>
          <td>
           <Link to={"/admin-student/edit-student/"+props.students._id}>  <button className='view' >Edit</button></Link>
          </td>
        </tr>
      )
   const StudentsList = () => {
        return menuStudents.map(currentStudent=> {
            return <Student  students={currentStudent} key={currentStudent._id}/>;
        })
    };
    
    const filterStudent = (e) => {
      const newStudents = students.filter((student) => student.Grade === e.target.value);
      setMenuStudents(newStudents);
    } 
    return (
        <div className='content-student'>
            <h3>Logged Students</h3>
            <select onChange={filterStudent} class="selectpicker">
                 {students.map((grade) => {

                  return <option 
                    key={grade}
                    value={grade.Grade}
                     selected >{grade.Grade}
                    </option>;

                 })}
            </select>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Fullname</th>
              <th>CNE</th>
              <th>CNI</th>
              <th>N_TELEPHONE</th>
              <th>GMAIL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {StudentsList()}
          </tbody>
        </table>
        </div>
    )
}

export default StudentsList;
