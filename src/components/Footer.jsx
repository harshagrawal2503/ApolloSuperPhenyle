import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-green-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Apollo Super Phenyle</h3>
          <p>Best in quality and power – trusted for daily cleaning needs.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>📞 Phone: +91-9826456567</p>
          <p>✉️ Email: info@apollophenyle.com</p>
          <p>📍 Address: Industrial Area, Raigarh, Chhattisgarh, India</p>
        </div>

        {/* Quick Links or Note */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Info</h3>
          <p>✅ Disinfectant | ✅ Anti-Bacterial | ✅ Long-Lasting</p>
          <p>IS Certified: <strong>IS 1061</strong></p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs bg-green-950 py-4">
        &copy; {new Date().getFullYear()} Apollo Super Phenyle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
