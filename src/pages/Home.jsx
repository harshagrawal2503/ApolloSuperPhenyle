import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 pt-6 pb-12">
      {/* Hero Section */}
      <section className="text-center max-w-5xl px-2">
        <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-snug">
          Clean Better. Live Healthier. 🌿
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
          Welcome to <span className="font-bold text-green-700">Apollo Super Phenyle</span> — your reliable source for premium cleaning products trusted by homes and industries alike.
        </p>
        <Link to="/products">
          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300 shadow">
            🛒 Explore Products
          </button>
        </Link>
      </section>

      {/* Feature Grid */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-2">
        <FeatureCard emoji="🧴" title="Trusted Formula" text="Powerful phenyle & disinfectants for every setting." />
        <FeatureCard emoji="🌸" title="Fresh Fragrance" text="Long-lasting natural aroma for clean environments." />
        <FeatureCard emoji="✅" title="Quality Certified" text="Tested & packaged with care across all variants." />
      </section>

      {/* Product Banner Image */}
      <section className="mt-14 w-full max-w-6xl px-2 flex justify-center">
  <div className="overflow-hidden rounded-lg shadow-lg w-full">
    <img
      src="/images/apollowhitebanner.jpg"
      alt="Apollo Phenyle Banner"
      className="w-screen h-auto max-h-screen object-contain"
    />
  </div>
</section>

      {/* Call to Action Section */}
      <section className="mt-14 bg-green-700 text-white text-center py-10 px-6 rounded-lg shadow max-w-5xl w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Become a Distributor or Bulk Buyer 📦</h2>
        <p className="text-sm md:text-base">
          Get attractive wholesale pricing and doorstep delivery across India.
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-white text-green-700 px-6 py-2 rounded-full hover:bg-gray-100 transition">
            📞 Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

const FeatureCard = ({ emoji, title, text }) => (
  <div className="bg-green-50 p-6 rounded-lg text-center shadow hover:shadow-md transition">
    <div className="text-4xl mb-2">{emoji}</div>
    <h3 className="text-lg font-semibold text-green-800 mb-1">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
  </div>
);

export default Home;

