import React,{useState} from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import AdminBase from './components/Admin-Base/AdminBase';
import AdminTeacher from './components/Admin-Base/admin-teacher/AdminTeacher';
import AdminStudent from './components/Admin-Base/admin-student/AdminStudent';
import AddStudent from './components/Admin-Base/admin-student/addstudent/AddStudent';
import StudentsList from './components/Admin-Base/admin-student/studentlist/students-list';
import EditStudent from './components/Admin-Base/admin-student/editstudent/EditStudent';
import AddNotes from './components/Admin-Base/admin-teacher/note-student/AddNotes';
import AddTeacher from './components/Admin-Base/admin-teacher/addteacher/AddTeacher';
import ListTeacher from './components/Admin-Base/admin-teacher/list-teacher/list-teacher';
import AdminDashboard from './components/Admin-Base/admin-dashboard/AdminDashboard';
import Notice from './components/Admin-Base/notice/Notice';
import Attendance from './components/Admin-Base/attendance/Attendance';
import TakeAttendance from './components/Admin-Base/attendance/take-attendance/TakeAttendance';
import ListAttendance from './components/Admin-Base/attendance/list-attendance/ListAttendance';
import Login from './components/Admin-Base/admin-student/LoginStudent/login/Login';
import StudentView from './components/Admin-Base/admin-student/LoginStudent/viewDetails/StudentView';
import Statistics from './components/Admin-Base/Statistics/Statistics';
import ViewNote from './components/Admin-Base/admin-teacher/ViewNotes/ViewNote';
function App() {
  console.log(window.location.pathname);

  return (                                                                                                               
    <Router>
        <div className='side'>
           {window.location.pathname == "/login-student" || window.location.pathname == "/view-student" || window.location.pathname == "/admin-statistic" ?
              null : <AdminBase />
           }

           <Switch>
             <Route exact path='/' component={Homepage} />
             <Route exact path='/login-student' component={Login} />
             <Route exact path='/view-student' component={StudentView} />

             <Route exact path='/admin-teacher' component={AdminTeacher} />
             <Route exact path='/admin-dashboard' component={AdminDashboard} />
             <Route exact path='/admin-notice' component={Notice} />
             <Route exact path='/admin-attendance' component={Attendance} />
             <Route exact path='/admin-statistic' component={Statistics} />
             <Route exact path='/admin-attendance/take-attendance' component={TakeAttendance} />
             <Route exact path='/admin-attendance/list-attendance' component={ListAttendance} />

             <Route exact path='/admin-teacher/add-notes' component={AddNotes} />
             <Route exact path='/admin-teacher/view-notes' component={ViewNote} />
             <Route exact path='/admin-teacher/add-teacher' component={AddTeacher} />
             <Route exact path='/admin-teacher/view-teacher' component={ListTeacher} />
             <Route exact path='/admin-student' component={AdminStudent} />
             <Route exact path='/admin-student/add-student' component={AddStudent} />
             <Route exact path='/admin-student/view-student' component={StudentsList} />
             <Route exact path='/admin-student/edit-student/:id' component={EditStudent} />
          </Switch>
          
        </div>
       
 </Router>
 

  );
}

export default App;
