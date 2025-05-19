export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white pt-12 mt-16">
      {/* Top Section: 2 columns for mobile, 4 for large screens */}
      <div className="max-w-[1201px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {/* Column 1 */}
        <div className="min-w-[159px]">
          <h4 className="text-[14px] font-bold mb-4">MAIN LINKS</h4>
          <ul className="space-y-2">
            <li className="text-[14px]">Ease of doing business</li>
            <li className="text-[14px]">All services</li>
            <li className="text-[14px]">MDAs</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="min-w-[160px]">
          <h4 className="text-[14px] font-bold mb-4">EMERGENCY SERVICES</h4>
          <ul className="space-y-2">
            <li className="text-[14px]">Make complaints</li>
            <li className="text-[14px]">Report a robbery</li>
            <li className="text-[14px]">Report rape</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="min-w-[159px]">
          <h4 className="text-[14px] font-bold mb-4">E-SERVICES</h4>
          <ul className="space-y-2">
            <li className="text-[14px]">Solution Lens</li>
            <li className="text-[14px]">Solution Lens</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="min-w-[160px]">
          <h4 className="text-[14px] font-bold mb-4">HELP & SUPPORT</h4>
          <ul className="space-y-2">
            <li className="text-[14px]">Give feedback</li>
            <li className="text-[14px]">Contact the Govt</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-10 mt-10 relative">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-700" />
        <span className="relative z-10 text-sm text-gray-300 mb-8 px-[22px]">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved |
          Anambra State Government
        </span>
      </div>
    </footer>
  );
}
