import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const service = useLoaderData();
    const { _id, title, price, service_id } = service;

    return (
        <div className="md:my-10">
            <form className="md:p-16 bg-base-200 rounded-md">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
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