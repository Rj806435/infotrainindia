import React from 'react'
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { MdOutlineMobileScreenShare } from 'react-icons/md'
import { SiDatabricks, SiReactbootstrap } from 'react-icons/si'

function Design() {
    return (
        <div className='p-5'>
            <div className='max-w-[1250px] mx-auto'>
                {/* Introduction Section */}
                <div className=''>
                    <p className='text-4xl sm:text-5xl font-bold'>
                        Leading UI UX Design Firm in the Industry
                    </p>
                    <p className='mt-5 text-lg font-medium'>
                        Infotrain India's exceptional UI and UX design services assist you in reaching your customers across omnichannel digital platforms. We create high-quality UI UX designs with enticing graphical structures to assist you in developing a compelling online or app interface to improve the usability of your products and services.
                    </p>
                </div>

                {/* Creating Intuitive and Interactive UI and UX */}
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-5'>
                    <div className='lg:mt-48 md:mt-5'>
                        <h1 className='text-4xl sm:text-6xl'>
                            Creating Intuitive And Interactive UI And UX
                        </h1>
                        <p className='mt-10 text-lg font-medium'>
                            We are a renowned <span className='font-bold'>UI UX design agency</span> creating thoughtful <span className='font-bold'>website UI designs</span> rooted in standard practices.
                        </p>
                    </div>
                    <div>
                        <img className='w-full' src="https://www.ideatesystemsindia.com/wp-content/uploads/2021/09/ui-graphic-design-services-in-pune-1.png" alt="" />
                    </div>
                </div>

                {/* Visually Appealing UI UX Designs */}
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <img className='w-full' src="https://cdni.iconscout.com/illustration/premium/thumb/ui-ux-designing-7820838-6207659.png" alt="" />
                    </div>
                    <div className=' lg:mt-28 md:mt-10'>
                        <h1 className='text-4xl sm:text-6xl'>
                            Get Visually Appealing UI UX Designs
                        </h1>
                        <p className='lg:mt-20 md:mt-5 text-lg font-medium'>
                            As a top <span className='font-bold'>UI UX design agency in India</span>, we build interactive solutions integrated with the latest tools and technologies.
                        </p>
                    </div>
                </div>

                {/* Segment We Serve */}
                <div className='text-center mt-10'>
                    <h1 className='text-3xl sm:text-4xl'>Segments We Serve</h1>
                    <p className='mt-5 text-lg font-medium'>We fuel our UI and UX design service with the following tools and languages.</p>
                </div>
                <div className='grid md:grid-cols-1  lg:grid-cols-5 mt-20 mx-auto gap-10'>
                    <div className='mx-auto text-center'>
                        <div className='text-blue-700 text-6xl sm:text-9xl'><FaHtml5 /></div>
                        <p className='font-bold text-xl mt-5'>HTML 5</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <div className='text-blue-700 text-6xl sm:text-9xl'><FaCss3Alt /></div>
                        <p className='font-bold text-xl mt-5'>CSS3</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <div className='text-blue-700 text-6xl sm:text-9xl'><SiReactbootstrap /></div>
                        <p className='font-bold text-xl mt-5'>Bootstrap</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <div className='text-blue-700 text-6xl sm:text-9xl'><MdOutlineMobileScreenShare /></div>
                        <p className='font-bold text-xl mt-5'>Mobile</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <div className='text-blue-700 text-6xl sm:text-9xl'><SiDatabricks /></div>
                        <p className='font-bold text-xl mt-5'>Stationary</p>
                    </div>
                </div>

                {/* Why UI/UX Design for Mobile Apps */}
                <div className='grid md:grid-cols-1 lg:grid-cols-2 mt-20 p-5'>
                    <div>
                        <p className='text-4xl sm:text-6xl'>
                            Why Do You Need UI/UX Design Services for Mobile Apps?
                        </p>
                        <p className='text-lg mt-10 font-medium'>
                            The user-interface of the mobile application is the first thing that is available to the users, and for it to be unique and creative at the same time, you need the assistance of an experienced Mobile Apps UI/UX Design Company like Infotrain. An impressive mobile application with high-end UX/UI helps in creating a matchless presence of your app amongst users and in the market.
                        </p>
                    </div>
                    <div className='ml-5'>
                        <img className='w-full' src="https://oddeveninfotech.com/images/cta/ui-ux-design.png" alt="" />
                    </div>
                </div>

                {/* Our Approach Section */}
                <p className='text-4xl text-center mt-20'>Our Approach</p>
                <div className='grid md:grid-cols-1 p-5 lg:grid-cols-3 gap-10 mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-2xl'>Research</h1>
                        <p className='text-lg font-medium mt-5'>
                            Start by conducting user research to gather insights about your target audience. This can include interviews, surveys, and usability testing.
                        </p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl'>Prototyping</h1>
                        <p className='text-lg font-medium mt-5'>
                            Create low-fidelity prototypes to quickly test and iterate on design ideas. Tools like Sketch, Figma, or Adobe XD are great for this.
                        </p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl'>Testing</h1>
                        <p className='text-lg font-medium mt-5'>
                            Conduct usability testing with real users to gather feedback and make improvements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
