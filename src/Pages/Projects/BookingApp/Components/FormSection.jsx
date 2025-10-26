import { useContext } from "react";
import { registerBooking } from "../Services/API"
import { BookingContext } from "../Services/BookingContext";

export default function FormSection(){
    const {formData , setFormData, booking, setBooking} = useContext(BookingContext)
    const handleFormData = (e) => { 
        setFormData({...formData, [e.target.name]: e.target.value })
    };
    return( 
        <form className="form" onSubmit={(e)=>registerBooking(e, formData, booking, setBooking)}>
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