import SearchComponent from "./SearchComponent";

export default function Hero() {
  return (
    <section className="text-center px-4 relative overflow-hidden font-instrument">
      {/* Welcome Text Container with Background Shape */}
      <div className="relative pt-[100px] sm:pt-[140px] md:pt-[180px] inline-block">
        {/* Rotated Yellow Background Shape behind text only */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-0"
          style={{
            width: "310.35px",
            height: "90.45px",
            backgroundColor: "#FFD700",
            transform: "rotate(-4deg)",
            borderRadius: "10px",
          }}
        ></div>

        {/* Welcome Text */}
        <h1
          className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug"
          style={{ fontFamily: "Integral CF" }}
        >
          <p>GOVERNMENT OF</p>
          <p>ANAMBRA STATE</p>
        </h1>
      </div>

      {/* Search Section */}
      <div className="mt-[80px] sm:mt-[100px] md:mt-[130px]">
        <SearchComponent />
      </div>
    </section>
  );
}
