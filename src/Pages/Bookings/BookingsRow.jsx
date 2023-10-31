

const BookingsRow = ({booking}) => {

    const { customerName, date, price, service, email, image } = booking;
    console.log(booking);

    return (
        <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
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
                            <td>{price}</td>
                        <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
    );
};

export default BookingsRow;