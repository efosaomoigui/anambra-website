// components/LightSection.tsx
export default function LightSection() {
  return (
    <section
      className="relative bg-cover bg-center text-black"
      style={{
        backgroundImage: `url('/images/light-bg.png')`,
        height: "1003px",
      }}
    >
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="w-full max-w-3xl px-4 py-8 rounded-xl text-center backdrop-blur-sm">
          {/* Title */}
          <h2
            className="italic text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight"
            style={{ fontFamily: "Playfair Display" }}
          >
            Light of the Nation
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 font-instrument">
            {/* Col 1 */}
            <div>
              <h2 className="text-2xl font-bold text-black">6M</h2>
              <p className="text-sm text-gray-600 mt-1">Beautiful People</p>
            </div>

            {/* Col 2 */}
            <div>
              <h2 className="text-2xl font-bold text-black">No 1</h2>
              <p className="text-sm text-gray-600 mt-1">
                Economy in South East
              </p>
            </div>

            {/* Col 3 */}
            <div>
              <h2 className="text-2xl font-bold text-black">₦200B+</h2>
              <p className="text-sm text-gray-600 mt-1">Annual Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
