import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row">
            <div className="md:w-1/2 relative">
                <img src={person} className="w-3/4 rounded-lg shadow-2xl"/>
                <img src={parts} className="absolute right-8 top-1/2 w-1/2 border-white border-8 rounded-lg shadow-2xl"/>
            </div>
            <div className="md:w-1/2 md:space-y-5">
                <h3 className="md:text-2xl md:font-bold text-red-500">About Us</h3>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-700 w-2/3">We are qualified & of experience in this field</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                </p>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                </p>
                <button className="text-white bg-red-500 py-1.5 px-3 md:py-2 md:px-5 rounded-md">Get More Info</button>
            </div>
        </div>
    </div>
    );
};

export default About;
