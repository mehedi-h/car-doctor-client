
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"


const Banner = () => {

    return (
    <div className="carousel w-full md:h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src={img1}
            className="w-full rounded-md"
            />
            <div className="absolute h-full rounded-md flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className="text-white md:space-y-7 md:pl-24">
                    <h2 className="md:text-5xl md:font-bold md:w-2/5">
                        Affordable Price For Car Servicing</h2>
                    <p>
                        There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
                    </p>
                    <div className="md:text-sm md:font-semibold">
                        <button className="btn btn-primary md:mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>

            <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❮
                </a>
                <a href="#slide2" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❯
                </a>
            </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full">
            <img
            src={img2}
            className="w-full rounded-md"
            />
            <div className="absolute h-full rounded-md flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className="text-white md:space-y-7 md:pl-24">
                    <h2 className="md:text-5xl md:font-bold md:w-2/5">
                        Affordable Price For Car Servicing</h2>
                    <p>
                        There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
                    </p>
                    <div className="md:text-sm md:font-semibold">
                        <button className="btn btn-primary md:mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❮
                </a>
                <a href="#slide3" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❯
                </a>
            </div>
        </div>
        
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src={img3}
            className="w-full rounded-md"
            />
            <div className="absolute h-full rounded-md flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className="text-white md:space-y-7 md:pl-24">
                    <h2 className="md:text-5xl md:font-bold md:w-2/5">
                        Affordable Price For Car Servicing</h2>
                    <p>
                        There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
                    </p>
                    <div className="md:text-sm md:font-semibold">
                        <button className="btn btn-primary md:mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>

            <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❮
                </a>
                <a href="#slide4" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❯
                </a>
            </div>
        </div>


        <div id="slide4" className="carousel-item relative w-full">
            <img
            src={img4}
            className="w-full rounded-md"
            />
            <div className="absolute h-full rounded-md flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className="text-white md:space-y-7 md:pl-24">
                    <h2 className="md:text-5xl md:font-bold md:w-2/5">
                        Affordable Price For Car Servicing</h2>
                    <p>
                        There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
                    </p>
                    <div className="md:text-sm md:font-semibold">
                        <button className="btn btn-primary md:mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>

            <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❮
                </a>
                <a href="#slide3" className="btn btn-circle bg-[#ff5200] hover:bg-[#ff3800] text-white">
                    ❯
                </a>
            </div>
        </div>
    </div>
    );
};

export default Banner;
