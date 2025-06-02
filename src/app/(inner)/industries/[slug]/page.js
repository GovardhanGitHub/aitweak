import IndustryDetails from "@/components/industry-component/IndustryDetails";

// Required for static export: generateStaticParams
export async function generateStaticParams() {
  const data = await import('@/data/AiServices.json');
  // Use the industries array for static params
  const industries = data.default?.industries || data.industries || [];
  // Remove leading '/industries/' for Next.js dynamic route param
  return industries.map(industry => ({ slug: industry.slug.replace(/^\/industries\//, "") }));
}

export default function IndustryPage() {
  return <IndustryDetails />;
}
