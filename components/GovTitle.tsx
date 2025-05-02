export default function GovTitle() {
  return (
    <div className="relative mt-[96.46px] inline-block">
      <h1
        className="relative z-10 text-4xl sm:text-5xl lg:text-[64px] font-bold text-black leading-snug"
        style={{ fontFamily: "Integral CF" }}
      >
        <p className="leading-[1.4]">GOVERNMENT OF</p>
        <p className="m-0">
          <span className="relative inline-block">
            {/* Yellow Background Behind "ANAMBRA" Only */}
            <span
              className="
        absolute -z-10 bg-[#FFB732] rounded-[7px]
        w-[250px] h-[80px]
        sm:w-[250px] sm:h-[67px]
        md:w-[300px] md:h-[100px]
        lg:w-[400px] lg:h-[108px]
        top-[-24px] right-[-10px]
      "
              style={{
                transform: "rotate(-5deg)",
                transformOrigin: "right bottom",
              }}
            ></span>
            <span className="relative px-2">ANAMBRA</span>
          </span>{" "}
          STATE
        </p>
      </h1>
    </div>
  );
}
