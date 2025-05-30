import HeaderTwo from "@/components/header/HeaderTwo";
import FooterOne from "@/components/footer/FooterOne";

export const metadata = {
  title: 'Our Services | Luminos',
  description: 'Explore our comprehensive range of AI and technology services.',
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      <FooterOne />
    </>
  );
}
