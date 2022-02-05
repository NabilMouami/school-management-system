import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css'
function EditStudent(props) {
    const [students,setStudents] = useState([]);
    const [fullname,setFullname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cne, setCne] = useState('');
    const [cni, setCni] = useState('');
 
    useEffect(() =>{
        axios.get('http://localhost:1000/students/'+props.match.params.id).then(response => {
            setStudents(response.data);
            setFullname(response.data.Fullname);
            setLastname(response.data.Lastname);
            setCne(response.data.Cne);
            setCni(response.data.Cni);
        });
     },[]);
    const onSubmit = (e) => {
        e.preventDefault();
    
        const student = {
          fullname: fullname,
          lastname: lastname,
          cne: cne,
          cni: cni
        }
    
        console.log(student);
    
        axios.post('http://localhost:1000/students/update/' + props.match.params.id, student)
          .then(res => console.log(res.data));
        window.location='/admin-student/view-student'
      }
    return (
        <div className='form-edit'>
            <h3>Edit Student Log</h3>
            <form onSubmit={onSubmit}>
            
                <div className="form-group"> 
                <label>Fullname: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Lastname: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Cne: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={cne}
                    onChange={(e) => setCne(e.target.value)}
                    />
                </div> 
                <div className="form-group">
                <label>Cni: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={cni}
                    onChange={(e) => setCni(e.target.value)}
                    />
                </div>
            

                <div className="form-group">
                  <input type="submit" value="Edit Student Log" className="btn btn-primary" />
                </div>
            </form>
    </div>
    )
}

export default EditStudent
