import { useState, useEffect } from "react";
import { fetchBooking } from "./Services/API";
import FormSection from "./Components/FormSection";
import BookingDisplay from "./Components/BookingDisplay";
import BookingSelector from "./Components/BookingSelector";
import { BookingContext } from "./Services/BookingContext";
import LoginPage from "./Components/LoginPage";
import './AppointmentSys.css'


function BookingApp(){
    /**use effect will fetch data from the api setup in server/index, which then queries the data from the database and returns it here
     * Data should have ID, name, time (Have to look up the proper names of the tables)
     *      !ID is actually setup to auto increment in postgres via the identity constraint
     */

    const [loginStatus, setLoginStatus] = useState(false)
    const [booking, setBooking] = useState([]);

    const [selected, setSelected] = useState({
        id:'',
        fname:'',
        lname:'',
        time: '',
        date: '',
    });

    const [formData, setFormData] = useState({
        fname: '',
        lname:'',
        date: '',
        time: '',
    });

    const contextValues= {booking, setBooking, formData, setFormData, selected, setSelected}
    useEffect(()=> {
        fetchBooking({setBooking})
    },[])
    
    return( 
        <>
        {loginStatus !== true ? 
            <LoginPage setLoginStatus={setLoginStatus}/>
        :
        <div className="appointments"> 
            <BookingContext.Provider value={contextValues}>
                <FormSection/>
                <BookingSelector/>
                <BookingDisplay/>
            </BookingContext.Provider>
        </div>}
        </>
    );
};

export default BookingApp;


// const BookingSelector = ({booking, updateBooking, deleteBooking, handleSelect}) =>{
//     return(
//         <div className="selection">
//             <select onChange={handleSelect} size={booking.length-1}>
//                 {booking.map((booking) => (
//                     <option key={booking.id} value={booking.id}>
//                         Date: {booking.date} | Time: {booking.time} | Client: {booking.fname} {booking.lname}  
//                     </option>
//                 ))};
//             </select>
//             <div>
//                 <button onClick={updateBooking}>Change/Update Booking</button>
//                 <button onClick={deleteBooking}>Delete Booking</button>
//             </div>
//         </div> 
//     );
// };

    
/*option list has a value which is the Number(e.target.value)*/
    
    // const deleteBooking = async()=>{
    //     try{
    //         await axios.delete('http://localhost:8080/api/appointment', {
    //             params: {id: selected.id}
    //             });
    //         console.log("deleted:", selected)
    //         alert("Booking deleted")
    //     } catch (error){
    //         console.log(error);
    //         alert("Failed to delete booking")
    //     }
    //     fetchBooking()
    // };

    // const updateBooking = async()=>{
    //     try{
    //         console.log(selected);
    //         await axios.put('http://localhost:8080/api/appointment', {
    //             id: selected.id ,
    //             first_name: formData.fname || selected.fname,
    //             last_name: formData.lname || selected.lname,
    //             time: formData.time || selected.time,
    //             date: formData.date || selected.date
    //             });
    //         console.log("Updated:", selected.data)
    //         alert("Booking updated")
    //     } catch (error){
    //         console.log(error);
    //         alert("Failed to update booking")
    //     }
    //     fetchBooking();
    // };

    // const registerBooking = async (e) =>{
    //     e.preventDefault()
    //     try{
    //         await axios.post('http://localhost:8080/api/appointment', {
    //         first_name: formData.fname,
    //         last_name: formData.lname,
    //         time: formData.time,
    //         date: formData.date
    //         });
    //         console.log("sent:", booking.data)
    //         alert("Booking submitted")
    //     } catch (error){
    //         console.log(error);
    //         alert("Failed to create booking")
    //     }
    //     fetchBooking()
    // };

    // const fetchBooking = () =>{
    //     axios.get('/api/appointment')
    //     .then((response) =>{ //successfully retrieved data
    //         setBooking(response.data) //I would have just said response, what is .data?
            
    //         // console.log(response.data)
    //         // alert("Retrieved Bookings")
    //     })
    //     .catch((error)=>{ //Error obviously
    //         console.error('Error retreiving booking data: ', error)
    //         setBooking(undefined)
    //     });
    // };
    
    // useEffect(() => {
    //     fetchBooking();
    //     const interval = setInterval(() => {
    //         fetchBooking();
    //     }, 30000);
    //     return () => clearInterval(interval)
    // }, []);