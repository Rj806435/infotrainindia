import React, {useState} from 'react'

function Header() {
    
   
    return (
        <>   
            <header className="inset-x-0 bg-white top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <img className='w-40' src="https://infotrainindia.com/wp-content/uploads/2023/08/Untitled-design-scaled.jpg" alt="" />
                    </div>
                    <div className="hidden lg:flex lg:gap-x-10 p-4">
                        <a href="/" className="text-base font-semibold text-gray-900 hover:text-blue-500 active:text-blue-700">Home</a>
                        <a href="/about" className="text-base font-semibold text-gray-900 hover:text-blue-500">About</a>
                        <div className="relative group">    
                            <a href="/about" className="text-base font-semibold text-gray-900 hover:text-blue-500">Services</a>
                            <div className="absolute hidden group-hover:block p-1 border-b-black  w-60 bg-white z-50">
                                <a href="/ui-ux-design" className="block mt-8 px-4 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white font-semibold">UI/UX Design</a>
                                <a href="/web-development" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white font-semibold">Web Development</a>
                                <a href="/app-development" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white font-semibold">App Development</a>
                                <a href="/client" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white font-semibold">Our Client's</a>
                            </div>
                        </div>
                        <a href="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-500">Blog</a>
                        <a href="/contactUs" className="text-base font-semibold text-gray-900 hover:text-blue-500">Contact Us</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
