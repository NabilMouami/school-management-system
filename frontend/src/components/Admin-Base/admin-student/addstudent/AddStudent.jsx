import React,{useState} from 'react'
import axios from 'axios';

import './addstudent.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';




 
 
 
 

function AddStudent() {
   const [gender, setGender] = useState('Male');
   const [fullname,setFullname] = useState('');
   const [lastname, setLastname] = useState('');
   const [cne, setCne] = useState('');
   const [cni, setCni] = useState('');
   const [email,setEmail] = useState('');
   const [phonenumber,setPhonenumber] = useState();
   const [grade, setGrade] = useState('');
   const [rollno, setRollno] = useState();
   const [session, setSession] = useState('');

   const [fee, setFee] = useState('');
  

 
const onSubmit1 = (e) => {
   e.preventDefault();
   const student = {
      Fullname: fullname,
      Lastname: lastname,
      Cne: cne,
      Cni: cni,
      Email: email,
      Phonenumber: phonenumber,
      Grade: grade,
      Rollno: rollno,
      Session: session,
      Gender: gender,
      Fee: fee
   };
   {console.log(student)};
   axios.post('http://localhost:1000/students/add', student).then(res => console.log(res.data));
} 

 return (
    <div>
        <div className="content-st">
            <form onSubmit={onSubmit1}>
                <div className="user-details">
                  <div className="input-box">
                     <span className="details">Full name:</span>
                     <br/>
                     <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">Last name:</span>
                     <br/>
                     <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">CNE:</span>
                     <br/>
                     <input type="text" value={cne} onChange={(e) => setCne(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">CNI:</span>
                     <br/>
                     <input type="text" value={cni} onChange={(e) => setCni(e.target.value)}/>
                  </div>

                  <div className="input-box">
                     <span className="details">Email:</span>
                     <br/>
                     <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">Phone Number:</span>
                     <br/>
                     <input type="number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Grade:</span>
                    <br/>
                    <select  value={grade} onChange={(e) => setGrade(e.target.value)}>
                       <option value="I">I</option>
                       <option value="II">II</option>
                       <option value="III">III</option>
                       <option value="IV">IV</option>
                       <option value="V">V</option>
                       <option value="VI">VI</option>
                       <option value="VII">VII</option>
                       <option value="VIII">VIII</option>
                       <option value="IX">IX</option>
                       <option value="X">X</option>
                    </select>
                  </div>
                  <div className="input-box">
                     <span className="details">Roll No:</span>
                     <br/>
                     <input type="number" value={rollno} onChange={(e) => setRollno(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">Session:</span>
                     <br/>
                     <input type="text" value={session} onChange={(e) => setSession(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">fee:</span>
                     <br/>
                     <input type="text" value={fee} onChange={(e) => setFee(e.target.value)}/>
                  </div>
                  <div className="gender-details">
                     <FormLabel component="legend">Gender</FormLabel>
                     <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                     >
                        <FormControlLabel value="Female" control={<Radio />} label="Female" onClick={() => setGender('Female')}/>
                        <FormControlLabel value="Male" control={<Radio />} label="Male" onClick={() => setGender('Male')} />
                     </RadioGroup>
                  </div>
                </div>
               
                 
                    <input  className="Button" type="submit" value="Register"  />
               </form>
               </div>

      </div>
    )
}

export default AddStudent
