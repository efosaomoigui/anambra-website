// components/InterfaceWithGovernment.tsx
export default function InterfaceWithGovernment() {
  return (
    <section className="px-4 md:px-10 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-black"
          style={{ fontFamily: "Instrument Sans" }}
        >
          <p>Interface with your</p>
          <p>Government</p>
        </h2>
      </div>

      {/* Image Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/interface1.jpg"
            alt="Government Interface 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/interface2.jpg"
            alt="Government Interface 2"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
