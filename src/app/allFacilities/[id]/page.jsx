import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            Details page
        </div>
    );
};

export default DetailsPage;