import axios from "axios";
//FRONTEND FRONTEND FRONTEND
const api = axios.create({
    baseURL: import.meta.env.DEV ? '/' : import.meta.env.VITE_BACKEND_URL
});

export async function fetchBooking({setBooking}){
    api.get(`/api/appointment`)
    .then((response) =>{
        console.log('fetch response', response.data)
        setBooking(Array.isArray(response.data)? response.data : [])
    })
    .catch((error)=>{
        console.error('Error retreiving booking data: ', error)
        setBooking([])
    });
};

export async function deleteBooking({selected, setBooking}){
    try{
        await api.delete(`/api/appointment`, {
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

export async function registerBooking({e, formData, setBooking}){ //booking
    e.preventDefault()
    try{
        await api.post(`/api/appointment`, {
        first_name: formData.fname,
        last_name: formData.lname,
        appointment_time: formData.time,
        appointment_date: formData.date
        });
        console.log("sent:", )
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
        await api.put(`/api/appointment`, {
            id: selected.id ,
            first_name: formData.fname || selected.fname,
            last_name: formData.lname || selected.lname,
            appointment_time: formData.time || selected.time,
            appointment_date: formData.date || selected.date
            });
        console.log("Updated:", selected.data)
        alert("Booking updated")
    } catch (error){
        console.log(error);
        alert("Failed to update booking")
    }
    fetchBooking({setBooking});
};