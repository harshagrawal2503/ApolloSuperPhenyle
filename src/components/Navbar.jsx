import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between px-5">
        <div className="font-bold text-2xl mb-2 md:mb-0">Apollo Super Phenyle</div>
        <div className="flex gap-10 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/products" className="hover:text-yellow-300 transition">Products</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
