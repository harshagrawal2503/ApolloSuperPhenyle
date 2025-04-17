// import React from 'react';

// export default function Contact() {
//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-semibold text-blue-700">Contact Us</h2>
//       <p className="mt-2 text-gray-700">Call us: +91-9826456567</p>
//       <p className="mt-1 text-gray-700">Email: info@apollophenyle.com</p>
//       <a
//         href="https://wa.me/919826456567"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//       >
//         Chat on WhatsApp
//       </a>
//     </div>
//   );
// }

import React from 'react';

export default function Contact() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-semibold text-blue-700">Contact Us</h2>

      <div className="flex justify-center mt-6">
        <img
          src="/shyam sunder.jpg"
          alt="Shyam Sunder Agrawal"
          className="w-44 h-44 max-sm:w-32 max-sm:h-32 rounded-full object-cover border-4 border-blue-300 shadow-md"
        />
      </div>

      <p className="mt-4 text-lg font-medium text-gray-800">Shyam Sunder Agrawal</p>
      <p className="mt-2 text-gray-700">Call us: +91-9826456567</p>
      <p className="mt-1 text-gray-700">Email: info@apollophenyle.com</p>

      <a
        href="https://wa.me/919826456567"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  );
}
