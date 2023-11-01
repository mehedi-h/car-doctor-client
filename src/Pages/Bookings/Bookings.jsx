import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";



const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/checkouts?email=${user.email}`

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookings(data) 
        })
        
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure! You want to delete it?');
        if (proceed) {
            fetch(`http://localhost:5000/checkouts/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    // Deleted from cart--------------------->
                    alert('Service Deleted Successfully')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
        }
    }

    const handleConfirm = id => {
        const status = confirm('Are you sure! You want to confirm it?')
        if (status) {
            fetch(`http://localhost:5000/checkouts/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Confirm from cart--------------------------->
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remaining]
                    setBookings(newBooking)
                }
            })
        }
    }

    return (
        <div>
            <h2>Your number of bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow 
                                key={bookings._id} 
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                booking={booking}></BookingsRow>)
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;