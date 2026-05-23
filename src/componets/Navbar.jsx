import Link from 'next/link';
import React from 'react';

const NavbarPage = () => {
    return (
        <nav className='flex justify-between p-5 bg-red-100'>
            <div>
                <h2>SportsNest</h2>
            </div>
            <ul className='flex gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/allFacilities'}>All Facilities</Link></li>
                <li><Link href={'/myBookings'}>My Bookings</Link></li>
                <li><Link href={'/addFacility'}>Add Facility</Link></li>
            </ul>
            <ul className='flex gap-4'>
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/singUp'}>Sing Up</Link></li>
            </ul>

        </nav>
    );
};

export default NavbarPage;