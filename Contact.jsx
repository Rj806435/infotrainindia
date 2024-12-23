import React from 'react';

function Contact() {
    return (
        <div className=' sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='w-full h-auto md:w-full '>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1619.7088041308277!2d75.87944971042215!3d22.670075634535426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731059909427!5m2!1sen!2sin"
                        width="100%" height="600" allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div>
                <div className='mt-10 p-5 '>
                    <h3 className='text-2xl md:text-3xl font-bold'>Contact</h3>
                    <p className='font-bold mt-5'>Indore, Madhya Pradesh, INDIA</p>
                    <p className='font-semibold mt-5'>401/206  SKY RESIDENCY, RANI BAAG MAIN, KHANDWA ROAD INDORE, MADHYA PRADESH</p>
                    <p className='font-bold mt-7'>Bangalore, Karnataka, India</p>
                    <p className='font-semibold'>BANNARGATTA ROAD NEAR MEENAKSHI MALL, BANGALORE, KARNATAKA</p>
                    <p className='font-semibold mt-7'>Email: contects@infotrainindia.com</p>
                    <p className='font-semibold mt-7'>Contact No: 8888815992, 7067994744</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
