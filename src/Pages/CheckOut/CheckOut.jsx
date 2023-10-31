import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {

    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const order = { customerName: name, 
            email: email,
            image: img, 
            date: date, 
            price: price,
            service: title, 
            service_id: _id,
            
        }
        console.log(order);

        fetch('http://localhost:5000/checkouts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data?.insertedId) {
                
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Confirm it!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                            Swal.fire(
                            'Confirmed!',
                            'Your Checkout has been placed.',
                            'success'
                            )
                        }
                    })
            }
            form.reset();
        })

    }

    return (
        <div className="md:my-10">
            <form 
                onSubmit={handleCheckOut}
                className="md:p-16 bg-base-200 rounded-md">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input 
                        type="submit" 
                        value="Order Confirmed"
                        className="bg-red-500 text-white font-semibold md:py-2 rounded-md hover:cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;