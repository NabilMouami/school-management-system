import React, {Fragment, useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios'
import './Homepage.css'
import Carousel from './Carousel/Carousel'
function Homepage() {
    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:1000/admin/login", user)

            history.push("/admin-base")
    }
    
    return (
    <Fragment>
      
       <div className="main">
                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">Almounir</h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="/">School</a></li>
                            <li><a href="/">Homepage</a></li>
                            <li><a href="#notice">Notice </a></li>
                        
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <h1>Institue Technology & <br/><span>Development</span><br/>National</h1>
                    <p className="par">La Faculté Pluridisciplinaire de Nador (FPN) est le seul établissement universitaire à accès ouvert dans<br/> la région du Rif Marocain<br/>
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/> ullamco<br/>
                        laboris nisi ut aliquip ex ea commodo consequat.<br/>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <p style={{color: "red", fontFamily: "fantasy", fontSize: "20px"}}>If You are Student:</p>
                        <button className="cn"><a href="/login-student">JOIN US</a></button>
                        <div className="form">
                            <h2>Login Admin</h2>
                            <input type="email"  name="email" value={user.email} onChange={handleChange} placeholder="Enter Email Here" ></input>
                            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password Here" ></input>
                            <button className="btnnn" onClick={login}><a>Login</a></button>
                            <p className="link">Don't have an accont</p><br/>
                            <a href="#">Sign up Here</a>
                        </div>
                 </div>
                 <div id="notice">
                   <Carousel />
                 </div>

       </div>
    </Fragment>
    )
}

export default Homepage;
