import axios from 'axios';

export async function registerBooking({formData}){
    e.preventDefault()
    const {formData, _ } = formData
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