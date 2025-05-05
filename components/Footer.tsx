export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white pt-12 mt-16">
      {/* Top Section: 4 Columns */}
      <div className="max-w-[1201px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-bold mb-4">MAIN LINKS</h4>
          <ul className="space-y-2">
            <li className="text-sm">Ease of doing business</li>
            <li className="text-sm">All services</li>
            <li className="text-sm">MDAs</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-bold mb-4">EMERGENCY SERVICES</h4>
          <ul className="space-y-2">
            <li className="text-sm">Make complaints</li>
            <li className="text-sm">Report a robbery</li>
            <li className="text-sm">Report rape</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-bold mb-4">E-SERVICES</h4>
          <ul className="space-y-2">
            <li className="text-sm">Solution Lens</li>
            <li className="text-sm">Solution Lens</li>
            {/* <li className="text-sm">Ministry of Agriculture</li> */}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-bold mb-4">HELP & SUPPORT</h4>
          <ul className="space-y-2">
            <li className="text-sm">Give feedback</li>
            <li className="text-sm">Contact the Govt</li>
            {/* <li className="text-sm">Visit Us</li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Horizontal Line and Copyright Text */}
      <div className="text-center py-10 mt-10 relative">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-700" />
        <span className="relative z-10 text-sm text-gray-300 mb-8 pl-[22px] pr-[22px]">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved |
          Anambra State Government
        </span>
      </div>
    </footer>
  );
}
