import fetchBooking from "./FetchBooking"; 

export async function updateBooking({props}){
    try{
        console.log(props.selected);
        await axios.put('http://localhost:8080/api/appointment', {
            id: props.selected.id ,
            first_name: props.formData.fname || props.selected.fname,
            last_name: props.formData.lname || props.selected.lname,
            time: props.formData.time || props.selected.time,
            date: props.formData.date || props.selected.date
            });
        console.log("Updated:", props.selected.data)
        alert("Booking updated")
    } catch (error){
        console.log(error);
        alert("Failed to update booking")
    }
    fetchBooking();
};