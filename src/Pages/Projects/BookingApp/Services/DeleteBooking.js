import axios from 'axios';
import fetchBooking from './FetchBooking';

export async function deleteBooking({selected, setBooking}){
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
    fetchBooking(setBooking)
};