export default function SearchComponent() {
  return (
    <div className="w-full px-4 flex flex-col items-center">
      {/* Text Above Search */}
      <div className="text-center mb-4">
        <p className="text-base text-[#1E1E1E]">
          Find anything you need with the search bar
        </p>
      </div>

      {/* Search Input with Icon */}
      <div className="flex items-center bg-[#E9E9E9] rounded-full h-12 px-4 mb-6 w-full max-w-xl">
        <input
          type="text"
          placeholder="How to resolve business issues..."
          className="flex-grow bg-transparent px-2 text-sm text-gray-800 focus:outline-none"
        />
        <button className="text-gray-600 hover:text-black transition text-xl">
          <img
            src="/images/searchicon.png"
            alt="Search"
            className="w-[47px] h-[54px] object-contain"
          />
        </button>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
        <button className="rounded-full min-w-[160px] py-2 px-6 border-2 border-black text-black bg-white font-medium hover:bg-gray-100 transition">
          Emergency
        </button>
        <button className="rounded-full min-w-[160px] py-2 px-6 border-2 border-black text-black bg-white font-medium hover:bg-gray-100 transition">
          Budget
        </button>
        <button className="rounded-full min-w-[160px] py-2 px-6 border-2 border-black text-black bg-white font-medium hover:bg-gray-100 transition">
          Land Dispute
        </button>
        <button className="rounded-full min-w-[160px] py-2 px-6 border-2 border-black text-black bg-white font-medium hover:bg-gray-100 transition">
          Government Officials
        </button>
        <button className="rounded-full min-w-[160px] py-2 px-6 border-2 border-black text-black bg-white font-medium hover:bg-gray-100 transition">
          Ease of Business
        </button>
      </div>
    </div>
  );
}
