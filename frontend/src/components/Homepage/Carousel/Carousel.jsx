import React,{useState,useEffect} from 'react';
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./Carousel.css"
import logo from "./Notice.png"

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const [notices, setNotices] = useState({
       message: "",
       date: new Date(),
       techear: '',
       module: ''
     });
      console.log(notices);
    useEffect(() => {
      axios.get('http://localhost:1000/notices/').then(response => {
        setNotices(response.data);
    });
    }, []);

  return(
    <div className="carousel">
      <div
      className="carouselInner" >
        <img src={logo} alt='logo' />
        <div
        className="left"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1);
        }}
        >
        <FaChevronLeft style={{ fontSize: 30 }} />
      </div>
      {notices.length > 0 &&
      <div className="center">
        <h1>{notices[currImg].date.substr(0, 10)}</h1>
        <p>{notices[currImg].message}</p>
        <p>By teacher: {notices[currImg].techear}      And Module: {notices[currImg].module}</p>
      </div> }
      <div
        className="right"
        onClick={() => {
          currImg < notices.length - 1 && setCurrImg(currImg + 1);
        }}
      >
        <FaChevronRight style={{ fontSize: 30 }} />
      </div>
    </div>
  </div>

  );
}

export default Carousel;
