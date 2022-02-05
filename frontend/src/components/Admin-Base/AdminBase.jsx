import React from 'react'
import './style.css'
import admin from "./administrateur.png"
import { Link } from 'react-router-dom'
function AdminBase() {
    return (
        <div>
             <input type="checkbox" id="check" />
  <header>
    <label for="check">
      <i className="fas fa-bars" id="sidebar_btn"></i>
    </label>
    <div className="left_area">
      <h3>School Management</h3>
    </div>
    <div className="right_area">
      <a href="/" className="logout_btn">Logout</a>
    </div>
  </header>
  <div className="sidebar">
    <center>

      <img src={admin} className="profile_image" alt="" />
      <h4>Admin-Base</h4>

    </center>

    <a href="/admin-dashboard"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
   <Link to='/admin-teacher'><i className="fas fa-chalkboard-teacher"></i><span>Teacher</span></Link>
    <a href="/admin-student"><i className="fas fa-user-graduate"></i><span>Student</span></a>
    <a href="/admin-attendance"><i className="fas fa-address-card"></i><span>Attendance</span></a>
    <a href="/admin-statistic"><i className="fas fa-search-dollar"></i><span>Statistics</span></a>
    <a href="/admin-notice"><i className="fas fa-bullhorn"></i><span>Notice</span></a>


    </div>
  </div>
    )
}

export default AdminBase
