import axios from 'axios';

export default function fetchBooking({setBooking}){
    axios.get('/api/appointment')
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