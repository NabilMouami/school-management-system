import React,{useState,useEffect, Fragment} from 'react'
import './style.css'
import CardDashboard from '../admin-dashboard/card-dashboard/CardDashboard'
import axios from 'axios';
function AdminDashboard() {
    const [notices, setNotices] = useState({
        message: "",
        date: ''
    });
    console.log(notices);
    useEffect(() => {
        axios.get('http://localhost:1000/notices/').then(response => {
            setNotices(response.data);
        });
    }, []);
     
  const deletentc = (id) => {
    let data =  notices.filter(el => el._id !== id)

    setNotices(
        data
    )
  }

    return (
        <div>
            <CardDashboard />
            <div class="w3-panel w3-blue ">
               <p>Notice Board</p>
            </div><br/>

              {notices.length > 0 && notices.map((ntc) => {
                  return (
                    <div className="alert">

                      <div key={ntc._id}>
                        <span className="closebtn" onClick={ () =>deletentc(ntc._id)}>&times;</span>
                         <strong>{ntc.date.substr(0, 10)} ||By :techer name </strong><br/> {ntc.message}

                      </div>
                    </div>
                  )
              }
              )}
            
            
        </div>
    )
}

export default AdminDashboard
