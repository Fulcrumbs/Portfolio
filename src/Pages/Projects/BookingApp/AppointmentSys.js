import { useState } from "react";
import axios from 'axios';
//import Calendar from 'react-calendar'
import './Calendar.css'



function BookingApp(){
    /**use effect will fetch data from the api setup in server/index, which then queries the data from the database and returns it here
     * Data should have ID, name, time (Have to look up the proper names of the tables)
     *      !ID is actually setup to auto increment in postgres via the identity constraint
     */
    const [booking, setBooking] = useState([]);

    const [selected, setSelected] = useState({
        id:'',
        fname:'',
        lname:'',
        time: '',
        date: '',
    });
    const handleSelect = (e) => {
        const choice = booking.find( booking => booking.id === Number(e.target.value ))
        setSelected(choice);
        console.log("selected:", choice);
    };

    const [formData, setFormData] = useState({
        fname: '',
        lname:'',
        date: '',
        time: '',
    });
    const handleFormData = (e) => {
        
        setFormData({...formData, [e.target.name]: e.target.value })
    };


    const deleteBooking = async()=>{
        try{
            const deleteSelected = await axios.delete('http://localhost:8080/api/appointment', {
                params: {id: selected.id}
                });
            console.log("deleted:", deleteSelected.data)
            alert("Booking deleted")
        } catch (error){
            console.log(error);
            alert("Failed to delete booking")
        }
        };

    const updateBooking = async()=>{
        try{
            console.log(selected);
            const updateSelected = await axios.put('http://localhost:8080/api/appointment', {
                id: selected.id ,
                first_name: formData.fname || selected.fname,
                last_name: formData.lname || selected.lname,
                time: formData.time || selected.time,
                date: formData.date || selected.date
                });
            console.log("Updated:", updateSelected.data)
            alert("Booking updated")
        } catch (error){
            console.log(error);
            alert("Failed to update booking")
        }
    };

    const makeBooking = async (e) =>{
            e.preventDefault()
            try{
                const booking = await axios.post('http://localhost:8080/api/appointment', {
                first_name: formData.fname,
                last_name: formData.lname,
                time: formData.time,
                date: formData.date
                });
                console.log("sent:", booking.data)
                alert("Booking submitted")
            } catch (error){
                console.log(error);
                alert("Failed to create booking")
            }
        };

    // const BookingSelector = ({booking}) =>{
        

    //     return(
    //         <div>
                
    //         </div>
    //     );
    // };

    const BookingDisplay = ({booking}) =>{
        return(
            <div>
            <h1>Listed bookings:</h1>
            {booking !== undefined && booking.length > 0 ? ( //booking is defined and has elements
                <ol>
                    {booking.map((booking) => (
                        <li className='booking_list' key={booking.id}> 
                            {booking.fname} {booking.lname} {booking.time} {booking.date}  
                        </li>
                    ))}
                </ol>
            ): booking !== undefined ? ( //Reads as: Booking is not equal to undefined. Which means it Is defined but empty.
                <p>Bookings is empty</p>
            ):( 
                <p>Unable to Reach database</p>
            )}
            </div>
        )};
        
    // const FormSection = () => {
    //     return(
        
    // )};
    
    const fetchBooking = () =>{
        axios.get('http://localhost:8080/api/appointment')
        .then((response) =>{ //successfully retrieved data
            setBooking(response.data) //I would have just said response, what is .data?
            console.log(response.data)
            alert("Retrieved Bookings")
        })
        .catch((error)=>{ //Error obviously
            console.error('Error retreiving booking data: ', error)
            setBooking(undefined)
        });
    }

    
    // useEffect(() => {
    //     fetchBooking();
    //     const interval = setInterval(() => {
    //         fetchBooking();
    //     }, 30000);
    //     return () => clearInterval(interval)
    // }, []);

    

    return(
        <div> 
            {/* <input type="text" value={booking.Name} placeholder="Name"/><br/>
            <CalendarSection/> */}
            <br/>
            {/* <FormSection/> */}
            <div>
                <form onSubmit={makeBooking}>
                    <label>Enter First Name:</label><br></br>
                    <input type="text" name="fname" placeholder="John" value={formData.fname} onChange={handleFormData}></input><br></br>
                    <label>Enter Last Name:</label><br></br>
                    <input type="text" name="lname" placeholder="Smith" value={formData.lname} onChange={handleFormData}></input><br></br>
                    <label>Select Date and Time:</label><br></br>
                    <input type="date" name="date" value={formData.date} onChange={handleFormData}></input>
                    <input type="time" name="time" value={formData.time} onChange={handleFormData}></input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>   
            </div>  
            <button onClick={fetchBooking}>Retrieve Bookings</button>
            <BookingDisplay booking={booking}/>
            {/* <BookingSelector booking={booking}/> */}
            <select onChange={handleSelect}>
                    {booking.map((booking) => (
                        <option key={booking.id} value={booking.id}>
                            {booking.fname} {booking.lname} {booking.time} {booking.date}
                        </option>
                    ))};
                </select>
                <button onClick={updateBooking}>Change/Update Booking</button>
                <button onClick={deleteBooking}>Delete Booking</button>

                
        </div>);
};

export default BookingApp;
// const CalendarSection = () => {
    //     const [date, setDate] = useState(null);
    //     return(
    //         <div className="calendar">
    //           <Calendar onChange={setDate}/>  
    //         </div>
    //     )};
    