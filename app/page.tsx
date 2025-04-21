// app/page.tsx
import Hero from "../components/Hero";
import LightSection from "../components/LightSection";
import NoticeBoard from "../components/NoticeBoard";
import LatestNews from "../components/LatestNews";
import FAQComponent from "../components/FAQComponent";
import InterfaceWithGovernment from "../components/InterfaceWithGovernment";

export default function Home() {
  return (
    <>
      <Hero />
      <LightSection />
      <NoticeBoard />
      <InterfaceWithGovernment />
      <LatestNews />
      <FAQComponent />
    </>
  );
}
