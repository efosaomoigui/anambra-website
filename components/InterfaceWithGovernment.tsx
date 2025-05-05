export default function InterfaceWithGovernment() {
  return (
    <section className="px-4 md:px-20 py-16">
      <div className="max-w-[1201px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black leading-tight">
            <p>Interface with your</p>
            <p>Government</p>
          </h2>
        </div>

        {/* Image Row with overlays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image Block */}
          <div
            className="relative w-full h-[433px] rounded-[8px] overflow-hidden shadow-md bg-cover bg-center"
            style={{ backgroundImage: "url('/images/gov1.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="absolute bottom-[50px] left-6 text-white space-y-3">
              <h3 className="text-xl font-semibold">
                Connect with Local Agencies
              </h3>
              <p className="text-sm max-w-xs">
                Engage with your government for better services and
                transparency.
              </p>
              <button className="flex items-center justify-center gap-2 w-[247px] h-[48px] bg-[#FFB732] text-black font-semibold rounded-md">
                Get Started
                <img
                  src="/images/arrowup.png"
                  alt="Arrow Up"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>

          {/* Second Image Block */}
          <div
            className="relative w-full h-[433px] rounded-[8px] overflow-hidden shadow-md bg-cover bg-center"
            style={{ backgroundImage: "url('/images/gov2.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="absolute bottom-[50px] left-6 text-white space-y-3">
              <h3 className="text-xl font-semibold">
                Access Government Services
              </h3>
              <p className="text-sm max-w-xs">
                Quickly find and interact with key services that matter to you.
              </p>
              <button className="flex items-center justify-center gap-2 w-[247px] h-[48px] bg-[#FFB732] text-black font-semibold rounded-md">
                Explore Now
                <img
                  src="/images/arrowup.png"
                  alt="Arrow Up"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
