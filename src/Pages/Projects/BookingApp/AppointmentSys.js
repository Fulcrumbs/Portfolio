import { useEffect, useState } from "react";
import axios from 'axios';
import Calendar from 'react-calendar'
import './Calendar.css'
// import { Calendar } from '@demark-pro/react-booking-calendar';
// import '@demark-pro/react-booking-calendar/dist/react-booking-calendar.css';

//@demark-pro/react-booking-calendar

function BookingApp(){
    /**use effect will fetch data from the api setup in server/index, which then queries the data from the database and returns it here
     * Data should have ID, name, time (Have to look up the proper names of the tables)
     * 
     */
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState();
    const CalendarSection =() => {
        const [date, setDate] = useState(null);
        return(
            <div className="calendar">
              <Calendar onChange={setDate}/>  
            </div>
        )}
    
    

    const fetchBooking = () =>{
        axios.get('http://localhost:8080/api/appointment')
        .then((response) =>{ //successfully retrieved data
            setBooking(response.data) //I would have just said response, what is .data?
        })
        .catch((error)=>{ //Error obviously
            console.error('Error retreiving booking data: ', error)
            setBooking(undefined)
        });
    }

    useEffect(() => {
        fetchBooking();
        const interval = setInterval(() => {
            fetchBooking();
        }, 30000);
        return () => clearInterval(interval)
    }, []);



    // function handleNameChange(e){
    //     if(e.key === 'Enter'){
    //         setBooking(a => ({...a, Name: e.target.value}))
    //     }
    // };

    // function handleTimeChange(event){
    //     setBooking(a => ({...a, Time: event.target.value}))
    // };

    return(
        <div> 
            <input type="text" value={booking.Name} placeholder="Name"/><br/>
            <CalendarSection/>
            <br/>
            <h1>Listed bookings:</h1>
            {booking !== undefined && booking.length > 0 ? ( //booking is defined and has elements
                <ul>
                    {booking.map((booking) => (
                        <li key={booking.id}>
                            {booking.name} {booking.time}
                        </li>
                    ))}
                </ul>
            ): booking !== undefined ? ( // Is defined but empty
                <p>Bookings is empty</p>
            ):( 
                <p>Unable to Reach database</p>
            )}
                
        </div>);
};

// function addBooking(){
    
// }

export default BookingApp;