import SportsCard from '@/componets/SportsCard';
import React from 'react';

const allFacilities = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/spots`);
    const sportsData = await res.json();
    console.log(sportsData);
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h2 className='text-5xl font-bold text-center'>All Facilities</h2>
            <p className='text-center text-gray-600'>Discover our most popular and highly rated sports facilities</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    sportsData.map(data => <SportsCard key={data._id} data={data}></SportsCard>)
                }
            </div>
        </div>
    );
};

export default allFacilities;