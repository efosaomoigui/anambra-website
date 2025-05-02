export default function GovTitle() {
  return (
    <div className="relative mt-[96.46px] inline-block">
      <h1
        className="relative z-10 text-4xl sm:text-5xl lg:text-[64px] font-bold text-black leading-snug"
        style={{ fontFamily: "Integral CF" }}
      >
        <p>GOVERNMENT OF</p>
        <p className="m-0">
          <span className="relative inline-block">
            {/* Yellow Background Behind "ANAMBRA" Only */}
            <span
              className="absolute inset-0 -z-10"
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
  );
}
