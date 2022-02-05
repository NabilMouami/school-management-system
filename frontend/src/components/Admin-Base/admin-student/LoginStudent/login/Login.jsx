import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { load } from '../../../../../redux/userSlice';
import "./login.css"
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  const [ user, setUser] = useState({
    cne:"",
    cni:""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}
const login = () => {
  axios.post("http://localhost:1000/admin/student/login", user)
  .then(res => {
      console.log(res.data.user)
      dispatch(load(res.data.user));

      history.push("/view-student")
  })
}


  return(
  <div className='frm'>
    <div className="form">
       <h2>Student Login Here</h2>
      <input type="email"  name="cne" value={user.cne} onChange={handleChange} placeholder="Enter Cne Here" ></input>
      <input type="password" name="cni" value={user.cni} onChange={handleChange} placeholder="Enter Password Here" ></input>
       <button className="btnnn" onClick={login}><a>Login</a></button>
    </div>
   </div>
  );
}

export default Login;
