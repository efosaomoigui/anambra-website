export default function FAQComponent() {
  return (
    <section className="px-4 md:px-20 py-16 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[300px] bg-[#F1F5F9] p-6 rounded-lg shadow-md relative flex flex-col justify-between"
            >
              <p className="text-sm text-black mb-8">
                This is a short answer to FAQ {idx + 1}. It briefly addresses a
                common question users might have.
              </p>

              <div className="absolute bottom-4 left-6 w-[40%] h-[2px] bg-gray-400"></div>
              <div className="absolute bottom-4 right-6 w-[30%] h-[2px] bg-gray-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
