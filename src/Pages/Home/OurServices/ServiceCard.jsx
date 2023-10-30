import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 md:mt-10 bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
            <img
            src={img}
            alt={title}
            className="rounded-xl"
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title md:font-bold">{title}</h2>
            <div className="flex items-center justify-between">
                <h3 className="md:text-lg md:font-bold text-red-500">Price : ${price}</h3>
                <Link to={`/checkout/${_id}`}>
                    <button className="text-red-500 md:text-lg p-1">
                        <HiArrowNarrowRight></HiArrowNarrowRight>
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;
