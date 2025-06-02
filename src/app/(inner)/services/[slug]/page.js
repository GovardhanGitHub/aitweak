import React from 'react';
import SingleDetails from "@/components/service-component/SingleDetails";

export default async function ServiceDetailPage(props) {
  // Await params if it's a Promise (for export mode edge cases)
  const params = typeof props.params?.then === 'function' ? await props.params : props.params;
  const slug = params.slug;
  return (
    <div className='service-details'>
      <SingleDetails serviceSlug={slug} />
    </div>
  );
}

// Required for static export: generateStaticParams
export async function generateStaticParams() {
  // Import the AI services data
  const data = await import('@/data/AiServices.json');
  const aiServices = data.default?.aiServices || data.aiServices || [];
  return aiServices.map(service => ({ slug: service.slug }));
}
