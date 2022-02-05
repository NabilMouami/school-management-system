import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './style.css'
   const ListAttendance = () => {
    const [student, setStudent] = useState([]);
    console.log(student)
    useEffect(() => {
        axios.get('http://localhost:1000/attendances/').then(response => {
            setStudent(response.data);
        });
    }, []);
    return (
        <div className='list-attendance'>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Cne</th>
      <th scope="col">Date</th>
      <th scope="col">Attendance</th>
    </tr>
  </thead>
  <tbody>
    {student.map((std) => {
        return (
            <tr>
              <th scope="row">{std.name}</th>
               <td>{std.cne}</td>
               <td>{std.date.substr(0, 10)}</td>
               <td>{std.attendance}</td>
          </tr>

        )
    })}
  </tbody>
</table>
            
        </div>
    )
}

export default ListAttendance;
