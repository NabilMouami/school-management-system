import React,{useState,useEffect} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css'
function AddTeacher() {
    const [username,setUsername] = useState('');
    const [module,setModule] = useState('');
    const [salaire,setSalaire] = useState(0);
    const [date,setDate] = useState(new Date());


   const  onSubmit = (e) => {
        e.preventDefault();
    
        const teacher = {
          username: username,
          module: module,
          salaire: salaire,
          date: date
        }
    
        console.log(teacher);
    
        axios.post('http://localhost:1000/teachers/add', teacher)
          .then(res => console.log(res.data));
    
        window.location = '/admin-teacher';
      }

    return (
        <div className='add-teacher'>
            <h3>Create New Teacher Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group"> 
                <label>Teacher Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                <label>Module: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={module}
                    onChange={(e) => setModule(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Salaire: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={salaire}
                    onChange={(e) => setSalaire(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                </div>

                <div className="form-group">
                <input type="submit" value="Create Teacher" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default AddTeacher
