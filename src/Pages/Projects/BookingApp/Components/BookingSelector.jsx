import { updateBooking } from "../Services/API";
import { deleteBooking } from "../Services/API";
import { BookingContext } from "../Services/BookingContext";
import { useContext } from "react";

export default function BookingSelector(){
    const {formData, booking, setBooking, selected, setSelected} = useContext(BookingContext)
    const handleSelect = (e) => {
        const choice = booking.find(booking => booking.id === Number(e.target.value )) 
        setSelected(choice);
        console.log("selected:", choice);
    };
    return(
        <div className="selection">
            <select onChange={handleSelect} size={booking.length-1}>
                {booking.map((b) => (
                    <option key={b.id} value={b.id}>
                        Date: {b.date} | Time: {b.time} | Client: {b.fname} {b.lname}  
                    </option>
                ))};
            </select>
            <div>
                <button onClick={() => updateBooking({formData, selected, setBooking})}>Change/Update Booking</button>
                <button onClick={() => deleteBooking({selected, setBooking})}>Delete Booking</button>
            </div>
        </div> 
    );
};
