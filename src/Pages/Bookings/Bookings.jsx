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
        .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <h2>Your number of bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
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
                            bookings.map(booking => <BookingsRow key={bookings._id} booking={booking}></BookingsRow>)
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;