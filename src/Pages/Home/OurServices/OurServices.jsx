import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const OurServices = () => {

    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="md:my-10">
            <div className="text-center md:space-y-5">
                <h3 className="text-lg md:text-2xl md:font-semibold text-red-500">Service</h3>
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-gray-700">Service Area</h1>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard 
                        key={service._id} 
                        service={service}>
                        </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;