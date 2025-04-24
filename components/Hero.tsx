import SearchComponent from "./SearchComponent";

export default function Hero() {
  return (
    <section className="text-center px-4 relative overflow-hidden font-instrument">
      {/* Welcome Text Container */}
      <div className="relative pt-[100px] sm:pt-[140px] md:pt-[180px] inline-block">
        <h1
          className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug"
          style={{ fontFamily: "Integral CF" }}
        >
          <p>GOVERNMENT OF</p>
          <p>
            <span className="relative inline-block">
              {/* Yellow Background Behind "ANAMBRA" Only */}
              <span
                className="absolute inset-0 -rotate-[0deg] -z-10"
                style={{
                  backgroundColor: "#FFD700",
                  borderRadius: "10px",
                  transformOrigin: "center",
                  marginTop: "3px",
                  marginBottom: "2px",
                }}
              ></span>
              <span className="relative px-2">ANAMBRA</span>
            </span>{" "}
            STATE
          </p>
        </h1>
      </div>

      {/* Search Section */}
      <div className="mt-[80px] sm:mt-[100px] md:mt-[130px]">
        <SearchComponent />
      </div>
    </section>
  );
}
