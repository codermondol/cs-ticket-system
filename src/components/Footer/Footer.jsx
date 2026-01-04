import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-[1260px] mx-auto '>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 mt-4 text-white py-10 px-2 xl:px-0'>
                    <div>
                        <h4 className='font-bold text-2xl mb-3'>Cs - Ticket System</h4>
                        <p className='text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-2xl mb-3'>Company</h4>
                        <ul className='space-y-2'>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Mission</a></li>
                            <li><a href="">Contact Saled</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-2xl mb-3'>Services</h4>
                        <ul className='space-y-2'>
                            <li><a href="">Products & Services</a></li>
                            <li><a href="">Customer Stories</a></li>
                            <li><a href="">Download Apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-2xl mb-3'>Information</h4>
                        <ul className='space-y-2'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Join Us</a></li>
                        </ul>
                    </div>
                </div>
                {/* footer bottom */}
                <div className='border-t-1 border-gray-100'>
                    <p className='text-white text-center py-5'>&copy; 2025 CS - Ticket System. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;