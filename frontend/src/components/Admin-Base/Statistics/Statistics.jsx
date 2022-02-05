import React,{useState,useEffect} from 'react';
import {Line} from "react-chartjs-2";
import {Bar} from "react-chartjs-2";
import {Pie} from "react-chartjs-2";

import "./style.css"
function Statistics() {
    let fees = [0,2000,3000,3500,1500,4000]
const [feeData, setFeeData] = useState({
labels: ["2017","2018","2019","2020","2021","2022"],
datasets: [{
label: "Fees for Anne",
data: fees,
backgroundColor: "green",
borderColor: "black"
}],
})

const [nbrData, setNbrData] = useState({
    labels: ["First","Two","Third","Fourter","Fiver","Sixth"],
    datasets: [{
    label: "Numbre Students for Class",
    data: [28,33,22,30,34,29],
    backgroundColor: ["rgba(75,192,192,1)","#2a71d0"]
    }],
    })

    const [gnrData, setGnrData] = useState({
        labels: ["Feminim", "Male"],
        datasets: [{
        label: "Percentage Students for All Classes",
        data: [56,44],
        backgroundColor: ["rgba(75,192,192,1)","red"]
        }],
        })
        
  return (
      <div className='statistic'>
               <h1>Fees for All Annes:</h1>
               <Line data={feeData}/>
               <h1>Numbre Students:</h1>
               <Bar data={nbrData}/>
               <h1>Gender by %:</h1>
               <Pie data={gnrData} />


      </div>
  );
}

export default Statistics;
