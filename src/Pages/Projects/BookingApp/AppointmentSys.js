import { useEffect, useState } from "react";
import axios from 'axios';
import './Calendar.css'

const FormSection = ({formData, handleFormData, registerBooking}) => {
    return( 
        <form className="form" onSubmit={registerBooking}>
                <fieldset>
                    <label>Enter First Name:</label><br/>
                    <input type="text" name="fname" placeholder="John" value={formData.fname} onChange={handleFormData} required></input><br/>
                    <label>Enter Last Name:</label><br/>
                    <input type="text" name="lname" placeholder="Smith" value={formData.lname} onChange={handleFormData} required></input><br/>
                    <label>Select Date and Time:</label><br/>
                    <input type="date" name="date" value={formData.date} onChange={handleFormData} required></input>
                    <input type="time" name="time" value={formData.time} onChange={handleFormData} required></input><br/>
                    <input type="submit" value="Submit"></input>
                </fieldset>
        </form>  
)};

const BookingDisplay = ({booking, fetchBooking}) =>{
    useEffect(()=> {
            fetchBooking()
    },[])

    return(
        <div className="display">
            <h1>Booking Details:</h1>
            {booking !== undefined && booking.length > 0 ? ( //booking is defined and has elements
                <ul>
                    {booking.map((booking) => (
                        <li key={booking.id}> 
                            {booking.fname} {booking.lname} {booking.time} {booking.date}  
                        </li>
                    ))}
                </ul>
            ): booking !== undefined ? ( //Reads as: Booking is not equal to undefined. Which means it Is defined but empty.
                <p>Bookings is empty</p>
            ):( 
                <p>Unable to Reach database</p>
            )}
        </div>
)};

const BookingSelector = ({booking, updateBooking, deleteBooking, handleSelect}) =>{
        return(
            <div className="selection">
                <select onChange={handleSelect} size={booking.length-1}>
                    {booking.map((booking) => (
                        <option key={booking.id} value={booking.id}>
                            Date: {booking.date} | Time: {booking.time} | Client: {booking.fname} {booking.lname}  
                        </option>
                    ))};
                </select>
                <div>
                    <button onClick={updateBooking}>Change/Update Booking</button>
                    <button onClick={deleteBooking}>Delete Booking</button>
                </div>
            </div> 
        );
};

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

    /*option list has a value which is the Number(e.target.value)*/
    const handleSelect = (e) => {
        const choice = booking.find(booking => booking.id === Number(e.target.value )) 
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
            await axios.delete('http://localhost:8080/api/appointment', {
                params: {id: selected.id}
                });
            console.log("deleted:", selected)
            alert("Booking deleted")
        } catch (error){
            console.log(error);
            alert("Failed to delete booking")
        }
        fetchBooking()
    };

    const updateBooking = async()=>{
        try{
            console.log(selected);
            await axios.put('http://localhost:8080/api/appointment', {
                id: selected.id ,
                first_name: formData.fname || selected.fname,
                last_name: formData.lname || selected.lname,
                time: formData.time || selected.time,
                date: formData.date || selected.date
                });
            console.log("Updated:", selected.data)
            alert("Booking updated")
        } catch (error){
            console.log(error);
            alert("Failed to update booking")
        }
        fetchBooking();
    };

    const registerBooking = async (e) =>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:8080/api/appointment', {
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
        fetchBooking()
    };

    const fetchBooking = () =>{
        axios.get('http://localhost:8080/api/appointment')
        .then((response) =>{ //successfully retrieved data
            setBooking(response.data) //I would have just said response, what is .data?
            
            // console.log(response.data)
            // alert("Retrieved Bookings")
        })
        .catch((error)=>{ //Error obviously
            console.error('Error retreiving booking data: ', error)
            setBooking(undefined)
        });
    };
    
    // useEffect(() => {
    //     fetchBooking();
    //     const interval = setInterval(() => {
    //         fetchBooking();
    //     }, 30000);
    //     return () => clearInterval(interval)
    // }, []);

    

    return(
        <div className="appointments" > 
            <FormSection formData={formData} handleFormData={handleFormData} registerBooking={registerBooking}/>
            <BookingSelector booking={booking} handleSelect={handleSelect} updateBooking={updateBooking} deleteBooking={deleteBooking}/>
            <BookingDisplay booking={booking} fetchBooking={fetchBooking}/>
        </div>);
};

export default BookingApp;
    