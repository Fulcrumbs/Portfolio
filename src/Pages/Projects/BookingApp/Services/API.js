import axios from "axios";

export async function deleteBooking({selected, setBooking}){
    try{
        await axios.delete('/api/appointment', {
            params: {id: selected.id}
            });
        console.log("deleted:", selected)
        alert("Booking deleted")
    } catch (error){
        console.log(error);
        alert("Failed to delete booking")
    }
    fetchBooking({setBooking})
};

export async function fetchBooking({setBooking}){
    axios.get('/api/appointment')
    .then((response) =>{
        // console.log('fetch response', response.data)
        setBooking(response.data)
    })
    .catch((error)=>{
        console.error('Error retreiving booking data: ', error)
        setBooking([])
    });
};

export async function registerBooking({formData, booking, setBooking}){
    e.preventDefault()
    try{
        await axios.post('/api/appointment', {
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
    fetchBooking({setBooking})
};

export async function updateBooking({formData, selected, setBooking}){
    try{
        console.log(selected);
        await axios.put('/api/appointment', {
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
    fetchBooking({setBooking});
};