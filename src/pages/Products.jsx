import React, { useState } from "react";

const products = [

  {
    src: "/images/apollowhite1L.jpg",
    title: "White Phenyle (1L)",
    desc: "Strong disinfectant for homes with lasting freshness.",
    alt: "Apollo White Phenyle 1L"
  },
  {
    src: "/images/apollowhite5L.jpg",
    title: "White Phenyle (5L)",
    desc: "Powerful cleaner for institutional and commercial use.",
    alt: "Apollo White Phenyle 5L"
  },
  {
    src: "/images/apolloblack1L.jpg",
    title: "Black Phenyle (1L)",
    desc: "Affordable disinfectant ideal for daily cleaning.",
    alt: "Apollo Black Phenyle 1L"
  },
  {
    images: ["/images/apolloblack5L.jpg", "/images/apolloblack5Lback.jpg"],
    title: "Black Phenyle (5L)",
    desc: "Industrial-grade black phenyle for deep sanitation.",
    alt: "Apollo Black Phenyle 5L"
  },
  {
    src: "/images/bleachingpowder.jpg",
    title: "Bleaching Powder",
    desc: "Multi-use disinfectant for floors and surfaces.",
    alt: "Bleaching Powder"
  },
  {
    src: "/images/disinfectant.jpg",
    title: "Disinfectant",
    desc: "Advanced surface cleaner for hospitals and offices.",
    alt: "Apollo Disinfectant"
  },
  {
    src: "/images/handwash.jpg",
    title: "Hand Wash",
    desc: "Gentle and effective hand cleanser.",
    alt: "Apollo Hand Wash"
  },
  {
    src: "/images/toiletcleaner5L.jpg",
    title: "Toilet Cleaner (5L)",
    desc: "Thick gel formula for stain-free toilets.",
    alt: "Apollo Toilet Cleaner 5L"
  },
  {
    src: "/images/dustbrush.jpg",
    title: "Dust Brush",
    desc: "Soft bristle brush ideal for dry sweeping.",
    alt: "Cleaning Dust Brush"
  },
  {
    images: ["/images/broom1.jpg", "/images/broom2.jpg", "/images/broom3.jpg"],
    title: "Broom",
    desc: "Durable broom for home and office use.",
    alt: "Standard Broom"
  },
  {
    src: "/images/supermop.jpg",
    title: "Super Mop",
    desc: "Easy squeeze mop for daily wet cleaning.",
    alt: "Apollo Super Mop"
  },
  {
    src: "/images/premiummop.jpg",
    title: "Premium Mop",
    desc: "Heavy-duty mop with extendable handle.",
    alt: "Premium Cleaning Mop"
  },
  {
    src: "/images/brwwiper.jpg",
    title: "Floor Wiper",
    desc: "Efficient water removal from floors.",
    alt: "Apollo Floor Wiper"
  },
  {
    src: "/images/hatric.jpg",
    title: "Hatric Toilet Cleaner",
    desc: "Fast action toilet cleaner for tough stains.",
    alt: "Hatric Toilet Cleaner"
  },
  {
    src: "/images/shine1Lspray.jpg",
    title: "Shine 1L Spray",
    desc: "Multipurpose surface shining spray.",
    alt: "Surface Shine Spray"
  }

];

// export default function Products() {
//   return (
//     <div className="p-6 sm:p-10">
//       <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">🧼 Our Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((item, index) => (
//           <div
//             key={index}
//             className="border p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 bg-white"
//           >
//             <img
//               src={item.src}
//               alt={item.alt}
//               className="w-full max-h-60 object-contain mb-4 rounded"
//             />
//             <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export default function Products() {
  return (
    <div className="p-6 sm:p-10">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">🧼 Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [currentImg, setCurrentImg] = useState(0);

  const hasImages = Array.isArray(product.images) && product.images.length > 0;
  const currentImage = hasImages ? product.images[currentImg] : product.src || "/placeholder.jpg";

  const handleNext = () => {
    if (hasImages) {
      setCurrentImg((prev) => (prev + 1) % product.images.length);
    }
  };

  const handlePrev = () => {
    if (hasImages) {
      setCurrentImg((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white">
      <div className="relative">
        <img
          src={currentImage}
          alt={product.alt || "Product Image"}
          className="w-full h-48 object-contain mb-4 rounded bg-gray-50"
        />
        {hasImages && product.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 px-1 py-1 rounded-full text-lg"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 px-1 py-1 rounded-full text-lg"
            >
              ▶
            </button>
          </>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
      <p className="text-gray-600">{product.desc}</p>
    </div>
  );
}