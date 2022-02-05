import React,{useState} from 'react';
import {  useSelector } from "react-redux";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import "./style.css";

function StudentView() {
    const student  = useSelector((state) => state.studentinfo.currentItem);
    let modules = [student.Marktmathematics,
                   student.Marktphysic,
                   student.Marktphylosophi,
                   student.Marktenglich,
                   student.Marktchymie
                  ]
    const [userData, setUserData] = useState({
      labels: ["math","physiq","phylosofi","englich","chimi"],
      datasets: [{
        label: "Notes Students",
        data: modules
      }],
    })

  return <div className='informations'>
     <div className='flex-std'>
       <div>
      <h4>Name:  {student.Fullname}</h4>
      <span>Roll: {student.Rollno}</span>
      </div>
      <div>
      <h4>Classe:  {student.Grade}</h4>
      <span>Session: {student.Session}</span>
      </div>

    </div>

    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">1ST UNIT TEST</th>
      <th scope="col">2ND UNIT TEST</th>
      <th scope="col">ANNUAL TEST</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Math</th>
      <td>{student.Mark1mathematics}</td>
      <td>{student.Mark2mathematics}</td>
      <td>{student.Marktmathematics}</td>
    </tr>
    <tr>
      <th scope="row">Physiq</th>
      <td>{student.Mark1physic}</td>
      <td>{student.Mark2physic}</td>
      <td>{student.Marktphysic}</td>
    </tr>
    <tr>
      <th scope="row">Phylosophie</th>
      <td>{student.Mark1phylosophi}</td>
      <td>{student.Mark2phylosophi}</td>
      <td>{student.Marktphylosophi}</td>
    </tr>
    <tr>
      <th scope="row">Englich</th>
      <td>{student.Mark1englich}</td>
      <td>{student.Mark2englich}</td>
      <td>{student.Marktenglich}</td>
    </tr>
    <tr>
      <th scope="row">Chymie</th>
      <td>{student.Mark1chymie}</td>
      <td>{student.Mark2chymie}</td>
      <td>{student.Marktchymie}</td>
    </tr>

  </tbody>
</table>
    <Bar data={userData}/>
   


  </div>;
}

export default StudentView;
