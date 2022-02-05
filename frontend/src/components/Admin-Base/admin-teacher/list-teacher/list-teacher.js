import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './style.css'
function ListTeacher() {
    const [teachers, setTeachers] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:1000/teachers')
        .then(response => {
          setTeachers(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },[])
    const Teacher = props => (
        <tr>
          <td>{props.teacher.username}</td>
          <td>{props.teacher.module}</td>
          <td>{props.teacher.salaire}</td>
          <td>{props.teacher.date.substring(0,10)}</td>
          <td>
                <a href="" onClick={() => { props.deleteTeacher(props.teacher._id) }}>delete</a>
          </td>
        </tr>
      )

  const  deleteTeacher = (id) => {
        axios.delete('http://localhost:1000/teachers/'+id)
          .then(response => { console.log(response.data)});
    
        setTeachers(
          teachers.filter(el => el._id !== id)
          );
      };
    const  teacherList = () => {
        return teachers.map(currentteacher => {
          return <Teacher teacher={currentteacher} deleteTeacher={deleteTeacher} key={currentteacher._id}/>;
        })
      }
    
    return (
        <div className='ttt'>
              <h3>Logged Teachers</h3>
                    <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Module</th>
                        <th>Salaire</th>
                        <th>Date</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacherList() }
                    </tbody>
                    </table>        
        </div>
    )
}

export default ListTeacher
