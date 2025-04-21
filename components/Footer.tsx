export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white pt-12">
      {/* Top Section: 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-bold mb-4">Government</h4>
          <ul className="space-y-2">
            <li className="text-sm">About Us</li>
            <li className="text-sm">Our Vision</li>
            <li className="text-sm">Leadership</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="text-sm">Healthcare</li>
            <li className="text-sm">Education</li>
            <li className="text-sm">Security</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-bold mb-4">Departments</h4>
          <ul className="space-y-2">
            <li className="text-sm">Ministry of Finance</li>
            <li className="text-sm">Ministry of Youth</li>
            <li className="text-sm">Ministry of Agriculture</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="text-sm">Email Us</li>
            <li className="text-sm">Call Center</li>
            <li className="text-sm">Visit Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 mt-10 border-t border-gray-700 text-sm">
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved |
        Anambra State Government
      </div>
    </footer>
  );
}
