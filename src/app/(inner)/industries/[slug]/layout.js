import HeaderTwo from "@/components/header/HeaderTwo";
import FooterOne from "@/components/footer/FooterOne";

export const metadata = {
  title: 'Industry Solutions | AiTweak',
  description: 'Explore our AI solutions tailored for various industries including healthcare, finance, manufacturing, and more.',
};

export default function IndustryLayout({ children }) {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      <FooterOne />
    </>
  );
}
