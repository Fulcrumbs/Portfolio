import { useContext} from "react"

import { BookingContext } from "../Services/BookingContext";

export default function BookingDisplay(){
    const {booking} = useContext(BookingContext);
    
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