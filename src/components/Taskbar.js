import React, { useState } from 'react'
import Help from '../images/help.png'
import Modal from 'react-bootstrap/Modal';

function Taskbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [time, setTime] = useState('Loading');
    const [day, setDay] = useState('Loading');

    function showTime() { 
        let time = new Date(); 
        let hour = time.getHours(); 
        let min = time.getMinutes(); 
        let sec = time.getSeconds(); 
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = weekday[time.getDay()];

        hour = hour < 10 ? "0" + hour : hour; 
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec; 
    
        let currentTime = hour + ":" + min + ":" + sec;

        setTime(currentTime)
        setDay(day)
    } 
    setInterval(showTime, 1000);
    
    return (
        <>
            <div className='taskbar'>
                <div className='help-icon float-start'>
                    <img src={Help} alt="Help" className='icon' onClick={handleShow}/>
                </div>
                <div className='time float-end fw-bold p-1'>    
                    <div className="digital-clock">{time}<br/>{day}</div> 
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Need Help?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Feel free to click on the icons or play around with the terminal!<br/>
                        Only a few custom commands work for the terminal, beware!</p>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Taskbar