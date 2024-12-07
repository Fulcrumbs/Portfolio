import { useState } from "react";



function MainApp(){
    const [booking, setBooking] = useState({
        Name: "", 
        Time:""
    })
    
                                
    function handleNameChange(e){
        if(e.key === 'Enter'){
            setBooking(a => ({...a, Name: e.target.value}))
        }
    }

    function handleTimeChange(event){
        setBooking(a => ({...a, Time: event.target.value}))
    }
    return(
        <div>
            <p>Listed Booking: {booking.Name}<br/>{booking.Time} </p>
            <input type="text" value={booking.Name} onEnter={handleNameChange}/><br/>
            <input type="number" value={booking.Time} onEnter={handleTimeChange}/>
        </div>);
};

function addBooking(){
    
}

export default MainApp;