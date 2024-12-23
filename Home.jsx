import React from 'react';
import { MdOutlineSendToMobile } from 'react-icons/md';
import { PiHandTapBold } from 'react-icons/pi';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Home() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return (
        <div className=' mx-auto'>
            <div className="relative flex items-center justify-center bg-cover h-[90vh] " style={{ backgroundImage: "url('https://app.agilitywriter.ai/img/2024/01/06/Understanding-Domo-Data-Experience-Platforms-172568217.jpg')" }}>
                <div className="bg-black bg-opacity-50 text-white w-full h-full flex items-center justify-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-36 text-center">Empowering Your <br /> Business with <br /> Customer Software <br /> Solutions.</p>
                </div>
            </div>
            <div className='max-w-[1250px] mx-auto'>
                <p className='text-center text-3xl sm:text-4xl md:text-5xl tracking-wide mt-10'>What We Can Do For You Or Your Business</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mx-auto mt-10 gap-6">
                    {/* UI/UX Design */}
                    <div className="w-auto md:w-auto p-6 cursor-pointer hover:bg-blue-500">
                        <div className="group p-6">
                        <Link to="/ui-ux-design" onClick={scrollToTop}>
                            <h1 className="text-blue-500 text-6xl group-hover:text-white">
                            <PiHandTapBold />
                            </h1>
                            <h2 className="text-2xl mb-4 group-hover:text-white mt-6">
                            UI/UX Design
                            </h2>
                            <p className="text-gray-500 text font-semibold group-hover:text-white">
                            Provides intriguing and captivating UI/UX to artfully represent your brand's concept.
                            </p>
                        </Link>
                        </div>
                    </div>

                    {/* App Development */}
                    <div className="w-80 md:w-auto h-80 p-6 cursor-pointer hover:bg-blue-500">
                        <div className="group p-6">
                        <Link to="/app-development" onClick={scrollToTop}>
                            <h1 className="text-blue-500 text-6xl group-hover:text-white">
                            <MdOutlineSendToMobile />
                            </h1>
                            <h2 className="text-2xl mb-4 group-hover:text-white mt-6">
                            App Development
                            </h2>
                            <p className="text-gray-500 font-semibold group-hover:text-white">
                            Best App Development Company driving your operational efficiencies with highly interactive and innovative apps.
                            </p>
                        </Link>
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="w-auto md:w-auto h-80 p-6 cursor-pointer hover:bg-blue-500">
                        <div className="group p-6">
                        <Link to="/web-development" onClick={scrollToTop}>
                            <h1 className="text-blue-500 text-6xl group-hover:text-white">
                            <TbDeviceDesktopCode />
                            </h1>
                            <h2 className="text-2xl mb-4 group-hover:text-white mt-6">
                            Web Development
                            </h2>
                            <p className="text-gray-500 font-semibold group-hover:text-white">
                            Leading Website Development company delivering high-end, user-friendly, and responsive websites.
                            </p>
                        </Link>
                        </div>
                    </div>
                </div>
                <p className='text-center text-2xl sm:text-3xl md:text-4xl tracking-wide mt-10'>How Do We Stand Out From Over Competitors?</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center  mx-auto text-center mt-10 gap-4">
                    <div className="w-full">
                        <div className="p-6">
                            <h1 className="w-36 mx-auto">
                                <img src="https://icon-library.com/images/data-analysis-icon/data-analysis-icon-26.jpg" alt="" />
                            </h1>
                            <h2 className="text-2xl mb-4 mt-6">In-Depth Analysis</h2>
                            <p className="text-gray-500 font-semibold">
                                Your needs, market trends, and business essentials are analyzed and balanced appropriately.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-6">
                            <h1 className="w-36 mx-auto">
                                <img src="https://th.bing.com/th/id/OIP.rnlDhhxDpEmj5KP_-dFIWAHaHa?w=512&h=512&rs=1&pid=ImgDetMain" alt="" />
                            </h1>
                            <h2 className="text-2xl mb-4 mt-6">Skilled Assistance</h2>
                            <p className="text-gray-500 font-semibold">
                                We outline the project's needs with the help of a panel of experts for scaling up your business.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-6">
                            <h1 className="w-36 mx-auto">
                                <img src="https://cdn0.iconfinder.com/data/icons/multimedia-427/66/55-512.png" alt="" />
                            </h1>
                            <h2 className="text-2xl mb-4 mt-6">Design & Development</h2>
                            <p className="text-gray-500 font-semibold">
                                We know all dimensions of design and development and excellently implement your imagination into reality.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-6">
                            <h1 className="w-36 mx-auto">
                                <img src="https://www.cvsc.org/wp-content/uploads/2024/06/Scorecard.png" alt="" />
                            </h1>
                            <h2 className="text-2xl mb-4 mt-6">Quality Assurance</h2>
                            <p className="text-gray-500 font-semibold">
                                We adhere to quality delivery and ensure it by processing each phase of development attentively.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-6">
                            <h1 className="w-36 mx-auto">
                                <img src="https://cdn-icons-png.flaticon.com/512/1317/1317015.png" alt="" />
                            </h1>
                            <h2 className="text-2xl mb-4 mt-6">Secured Deployment</h2>
                            <p className="text-gray-500 font-semibold">
                                With sharp security knowledge and a protected code depository, our experts ensure the flawless plan of the deployment pipeline by persistently testing security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
