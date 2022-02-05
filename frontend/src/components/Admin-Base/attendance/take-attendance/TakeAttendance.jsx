import React,{useState} from 'react'
import { useSelector } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import './style.css'
function TakeAttendance() {
    const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));

    console.log(date)
  
   const [att, setAtt] = useState('Present');
   console.log(att)

    const student  = useSelector((state) => state.studentinfo.currentItem);
    
    const onSubmit1 = (e) => {
        e.preventDefault();
         const attend = {
            name: student.Fullname.concat( student.Lastname),
             cne: student.Cne,
             attendance: att,
             date: date
         };
        axios.post('http://localhost:1000/attendances/add', attend).then(res => console.log(res.data));
     } 

    return (
        <div className='attendance'>
          <form onSubmit={onSubmit1}>

            <h4>Take Attendance</h4>
            <div className='att-flex'>
                <h3>{student.Fullname} {student.Lastname}</h3>
                <h3>{student.Cne}</h3>
                <div className="att-details">
                     <FormLabel className="formlabel" component="legend">Attendance </FormLabel>
                     <RadioGroup
                        aria-label="attendence"
                        defaultValue="abscent"
                        name="radio-buttons-group"
                     >  
                       <div className="att-radio">
                        <FormControlLabel value="Abscent" className="att-radio" control={<Radio />} label="Abscent" onClick={() => setAtt('Abscent')}/>
                        <FormControlLabel value="Present" control={<Radio />} label="Present" onClick={() => setAtt('Present')} />
                       </div>
                     </RadioGroup>
                  </div>
            </div>
            <div className="form-group">
                      <Stack component="form" noValidate spacing={3}>
                         
                          
                            <TextField
                                id="datetime-local"
                                label="Next appointment"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Stack>
                    </div>
                     <input className="btnn" type="submit" value="save attendance" />
                </form>

        </div>
    )
}

export default TakeAttendance;
