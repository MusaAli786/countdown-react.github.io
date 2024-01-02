import React,{useState, useEffect} from "react";
import  "./Countdown.css"
// import App from "./App";


  
    export const Countdown = () => {
      
      const [days, setDays] = useState(0);
      const [hours, setHours] = useState(0);
      const [minutes, setMinutes] = useState(0);
      const [seconds, setSeconds] = useState(0);
      const [inputDate, setInputDate] = useState("1 janaury 2025");
      const [currentDate, setCurrentDate] = useState("inputDate");
    
      useEffect (()=> {
        const changingDate = new Date(inputDate);
        const currentDate = new Date();
        const totalSeconds = (changingDate - currentDate) / 1000;
    
        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds % 60));
    
      },[currentDate]);
    
      function formatTime(time){
        return time < 10 ? `${time}` : time ; 
      }

      const onChangeHadler = (event) => {
        setInputDate(event.target.value);
      }
      
      const clickHandler = () => {
        setCurrentDate(inputDate);
      }

      return(
        <div className='mainContainer'>
        <div className='values'>
          <div className='value'>
            <p className='texes'>{days}</p>
            <span>Days</span>
          </div>
  
          <div className='value'>
            <p className='texes'>{hours}</p>
            <span>Hours</span>
          </div>
  
          <div className='value'>
            <p className='texes'>{minutes}</p>
            <span>Minutes</span>
          </div>
  
          <div className='value'>
            <p className='texes'>{seconds}</p>
            <span>Seconds</span>
          </div>
        </div>
        <div className='inputContainer'>
          <input type="text" className='inputtext' onChange={onChangeHadler} />
          <button className='countdownBtn' onClick={clickHandler}>countdown</button>
        </div>
      </div>
      );
     };


