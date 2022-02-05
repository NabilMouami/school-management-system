import React,{useState} from 'react'
import axios from 'axios';
import './style.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
     fontSize: 14,
   },
 }));

 const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
     backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   '&:last-child td, &:last-child th': {
     border: 0,
   },
 }));
 
 function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
 }
 
function AddNotes() {
    const [gender, setGender] = useState('Male');
    const [fullname,setFullname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cne, setCne] = useState('');
    const [cni, setCni] = useState('');
    const [grade, setGrade] = useState('');
    const [rollno, setRollno] = useState();
    const [session, setSession] = useState('');
    const [mark1englich, setMark1englich] = useState(0);
    const [mark2englich, setMark2englich] = useState(0);
    const [marktenglich, setMarktenglich] = useState(0);
    const [mark1physic, setMark1physic] = useState(0);
    const [mark2physic, setMark2physic] = useState(0);
    const [marktphysic, setMarktphysic] = useState(0);
    const [mark1chymie, setMark1chymie] = useState(0);
    const [mark2chymie, setMark2chymie] = useState(0);
    const [marktchymie, setMarktchymie] = useState(0);
    const [mark1mathematics, setMark1mathematics] = useState(0);
    const [mark2mathematics, setMark2mathematics] = useState(0);
    const [marktmathematics, setMarktmathematics] = useState(0);
    const [mark1phylosophi, setMark1phylosophi] = useState(0);
    const [mark2phylosophi, setMark2phylosophi] = useState(0);
    const [marktphylosophi, setMarktphylosophi] = useState(0);
    console.log(mark1englich);
 
    const rows = [
       createData('ENGLICH',<TextField id="filled-basic" type='number' value={mark1englich} style={{width: 80}} label="MARK1" variant="filled" onChange={(e) => setMark1englich(e.target.value)} />, <TextField id="filled-basic" type='number' value={mark2englich} style={{width: 80}} label="MARK2" variant="filled" onChange={(e) => setMark2englich(e.target.value)} />, <TextField id="filled-basic" type='number' value={marktenglich} style={{width: 80}} label="MARKT" variant="filled" onChange={(e) => setMarktenglich(e.target.value)} />),
       createData('PHYSIC',<TextField id="filled-basic" type='number' value={mark1physic} style={{width: 80}} label="MARK1" variant="filled" onChange={(e) => setMark1physic(e.target.value)} />, <TextField id="filled-basic" type='number' value={mark2physic} style={{width: 80}} label="MARK2" variant="filled" onChange={(e) => setMark2physic(e.target.value)} />, <TextField id="filled-basic" type='number' value={marktphysic} style={{width: 80}} label="MARKT" variant="filled" onChange={(e) => setMarktphysic(e.target.value)} />),
       createData('CHYMIE', <TextField id="filled-basic" type='number' value={mark1chymie} style={{width: 80}} label="MARK1" variant="filled" onChange={(e) => setMark1chymie(e.target.value)} />, <TextField id="filled-basic" type='number' value={mark2chymie} style={{width: 80}} label="MARK2" variant="filled" onChange={(e) => setMark2chymie(e.target.value)} />, <TextField id="filled-basic" type='number' value={marktchymie} style={{width: 80}} label="MARKT"  variant="filled" onChange={(e) => setMarktchymie(e.target.value)} />),
       createData('MATHEMATICS', <TextField id="filled-basic" type='number' value={mark1mathematics} style={{width: 80}} label="MARK1" variant="filled" onChange={(e) => setMark1mathematics(e.target.value)} />, <TextField id="filled-basic" type='number' value={mark2mathematics}  style={{width: 80}} label="MARK2" variant="filled" onChange={(e) => setMark2mathematics(e.target.value)} />, <TextField id="filled-basic" type='number' value={marktmathematics} style={{width: 80}} label="MARKT"  variant="filled" onChange={(e) => setMarktmathematics(e.target.value)} />),
       createData('PHYLOSOPHI', <TextField id="filled-basic" type='number' value={mark1phylosophi} style={{width: 80}} label="MARK1" variant="filled" onChange={(e) => setMark1phylosophi(e.target.value)} />, <TextField id="filled-basic" type='number' value={mark2phylosophi} style={{width: 80}} label="MARK2" variant="filled" onChange={(e) => setMark2phylosophi(e.target.value)} />, <TextField id="filled-basic" type='number' value={marktphylosophi} style={{width: 80}} label="MARKT"  variant="filled" onChange={(e) => setMarktphylosophi(e.target.value)} />),
     ];
 const onSubmit1 = (e) => {
    e.preventDefault();
    const student = {
       Fullname: fullname,
       Lastname: lastname,
       Cne: cne,
       Cni: cni,
       Grade: grade,
       Rollno: rollno,
       Session: session,
       Mark1englich: mark1englich,
       Mark2englich: mark2englich,
       Marktenglich: marktenglich,
       Mark1physic: mark1physic,
       Mark2physic: mark2physic,
       Marktphysic: marktphysic,
       Mark1chymie: mark1chymie,
       Mark2chymie: mark2chymie,
       Marktchymie: marktchymie,
       Mark1mathematics: mark1mathematics,
       Mark2mathematics: mark2mathematics,
       Marktmathematics: marktmathematics,
       Mark1phylosophi: mark1phylosophi,
       Mark2phylosophi: mark2phylosophi,
       Marktphylosophi: marktphylosophi
    };
    {console.log(student)};
    axios.post('http://localhost:1000/notes/add', student).then(res => console.log(res.data));
     window.location='/admin-teacher';
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
                     <span className="details">Grade:</span>
                     <br/>
                     <select value={grade} onChange={(e) => setGrade(e.target.value)}>
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
                  
                 </div>
                
                   <h2 class="section-header">Academic Details</h2>
                   <div>
                      <TableContainer component={Paper}>
                       <Table sx={{ minWidth: 700 }} aria-label="customized table">
                         <TableHead>
                           <TableRow>
                             <StyledTableCell>SUBJECTS</StyledTableCell>
                             <StyledTableCell align="right">1ST UNIT TEST</StyledTableCell>
                             <StyledTableCell align="right">2ND UNIT TEST</StyledTableCell>
                             <StyledTableCell align="right">ANNUAL TEST</StyledTableCell>
                           </TableRow>
                         </TableHead>
                         <TableBody>
                           {rows.map((row) => (
                             <StyledTableRow key={row.name}>
                               <StyledTableCell component="th" scope="row">
                                 {row.name}
                               </StyledTableCell>
                               <StyledTableCell align="right">{row.calories}</StyledTableCell>
                               <StyledTableCell align="right">{row.fat}</StyledTableCell>
                               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                             </StyledTableRow>
                           ))}
                         </TableBody>
                       </Table>
                     </TableContainer>
                   </div>
                <div className="Button">
                     <input type="submit" value="Register"  />
                 </div>
                </form>
                </div>
 
       </div>
     )
}

export default AddNotes
