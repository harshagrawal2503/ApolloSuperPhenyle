import React from 'react';

export default function Products() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 shadow hover:shadow-lg transition">
          <img src="/Whitephenyle.jpg" alt="Product 1" className="w-full max-h-60 object-contain mb-4"/>
          <h3 className="text-xl font-bold">White Phenyle (1L)</h3>
          <p>Strong disinfectant with a long-lasting fragrance.</p>
        </div>
        <div className="border p-4 shadow hover:shadow-lg transition">
          <img src="/blackphenyle.jpg" alt="Product 2" className="w-full max-h-60 object-contain  mb-4"/>
          <h3 className="text-xl font-bold">Black Phenyle (5L)</h3>
          <p>Industrial-grade cleaner for deep sanitation.</p>
        </div>
        <div className="border p-4 shadow hover:shadow-lg transition">
          <img src="/broom.jpg" alt="Product 2" className="w-full max-h-60 object-cover mb-4"/>
          <h3 className="text-xl font-bold">Broom</h3>
          <p>Magic Broom for all kinds of household and commercial cleaning.</p>
        </div>
        <div className="border p-4 shadow hover:shadow-lg transition">
          <img src="/wiper.jpg" alt="Product 2" className="w-full max-h-60 object-cover mb-4"/>
          <h3 className="text-xl font-bold">Wiper</h3>
          <p>Wiper for all kinds of water and chemical cleaning from surface.</p>
        </div>
      </div>
    </div>
  );
}