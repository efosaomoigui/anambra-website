// app/page.tsx
import Hero from "../components/Hero";
import LightSection from "../components/LightSection";
import NoticeBoard from "../components/NoticeBoard";
import LatestNews from "../components/LatestNews";
import FAQComponent from "../components/FAQComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <LightSection />
      <NoticeBoard />
      <LatestNews />
      <FAQComponent />
    </>
  );
}
