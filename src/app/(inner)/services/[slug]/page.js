import React from 'react';
import SingleDetails from "@/components/service-component/SingleDetails";

export default function ServiceDetailPage({ params }) {
    const { slug } = params;
    
    return (
        <div className='service-details'>
            <SingleDetails serviceSlug={slug} />
        </div>
    );
}
