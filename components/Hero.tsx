import GovTitle from "./GovTitle";
import SearchComponent from "./SearchComponent";

export default function Hero() {
  return (
    <section className="text-center px-4 relative overflow-hidden font-instrument">
      {/* Welcome Text Container */}
      <GovTitle />

      {/* Search Section */}
      <div className="mt-[80px] sm:mt-[100px] md:mt-[130px]">
        <SearchComponent />
      </div>
    </section>
  );
}
