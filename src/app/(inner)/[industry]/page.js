import IndustryDetails from "@/components/industry-component/IndustryDetails";

const metadata = {
  title: 'Industry Solutions | AiTweak',
  description: 'Explore our AI solutions tailored for various industries including healthcare, finance, manufacturing, and more.',
};

// Generate static params for build-time pre-rendering
export async function generateStaticParams() {
  const data = await import('@/data/AiServices.json');
  const industries = data.default?.industries || data.industries || [];
  return industries.map(industry => ({ 
    industry: industry.slug.replace(/^\/industries\//, "").replace(/-industry$/, "") 
  }));
}

export default function IndustryPage() {
  return (
    <>
      <IndustryDetails />
    </>
  );
}
