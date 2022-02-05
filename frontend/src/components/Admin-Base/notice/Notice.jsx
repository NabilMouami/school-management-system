import React,{useEffect,useState} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import './style.css'
function Notice() {
    const [message,setMessage] = useState('');
    const [date,setDate] = useState(new Date());
    const [techear,setTechear] = useState('');
    const [module,setModule] = useState('');
    
    const onSubmit1 = (e) => {
        e.preventDefault();
         const notice = {
             message: message,
             date: date,
             techear: techear,
             module: module
         };
        axios.post('http://localhost:1000/notices/add', notice).then(res => console.log(res.data));
     } 
    return (
        <div>
             <section className="contact">
                <form onSubmit={onSubmit1}>
                     <h3>Announce Something</h3>
                     <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" className="box" cols="30" rows="10"></textarea>
                     <div className="input-box">
                     <span className="details">Teacher name:</span>
                     <br/>
                     <input type="text" value={techear} onChange={(e) => setTechear(e.target.value)}/>
                  </div>
                  <div className="input-box">
                     <span className="details">Module:</span>
                     <br/>
                     <input type="text" value={module} onChange={(e) => setModule(e.target.value)}/>
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
                     <input className="btnn" type="submit" value="send message" />
                 </form>
             </section>

        </div>
    )
}

export default Notice
