export default function RankingStatsSection() {
  return (
    <div className="grid grid-cols-3 bg-[#000000]/10 p-5 gap-4 text-center mt-[60px] mb-[60px]">
      <div>
        <p className="italic font-playfair text-[24px] text-sm text-gray-600">
          Sub-national ease
        </p>
        <p className="italic font-playfair text-[24px] text-sm text-gray-600">
          of doing business
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold">1st</h4>
        <p className="italic font-playfair text-sm text-gray-600">
          in Southern Nigeria
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold">7th</h4>
        <p className="italic font-playfair text-sm text-gray-600">in Nigeria</p>
      </div>
    </div>
  );
}
