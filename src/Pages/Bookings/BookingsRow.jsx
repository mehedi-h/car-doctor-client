

const BookingsRow = ({booking, handleDelete, handleConfirm}) => {

    const { _id, customerName, date, price, service, email, image } = booking;
    console.log(booking);

    

    return (
        <tr>
            <th>
                <button 
                    onClick={()=>handleDelete(_id)}
                    className="btn btn-xs btn-circle btn-outline">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"><path 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeWidth="2" 
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                    </th>
                        <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="rounded w-12 h-12">
                                            {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                                        </div>
                                    </div>
                                <div>
                                </div>
                            </div>
                        </td>
                        <td>{customerName}</td>
                        <td>{service}</td>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td>${price}</td>
                    <th>
                    <button 
                    onClick={()=> {handleConfirm(_id)}}
                    className="btn btn-ghost btn-xs">Confirm</button>
            </th>
        </tr>
    );
};

export default BookingsRow;