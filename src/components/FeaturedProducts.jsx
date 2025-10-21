import React from "react";

const featuredProducts = [
  {
    name: 'ASPERSOR GIRATORIO 3 BOCAS 3/4" JADEVER JDSN1E23 *',
    code: '595670',
    bulto: '1',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 1 COMBINACION 3003 -',
    code: '175015',
    bulto: '60',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 1 PULSADOR 3002 -',
    code: '175014',
    bulto: '60',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 1 PUNTO 3001 -',
    code: '175013',
    bulto: '60',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 1 PUNTO Y 1 TOMA 3007 -',
    code: '175018',
    bulto: '30',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 1 TOMA 20A 20201082 -',
    code: '175020',
    bulto: '50',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 1 TOMA CON NEUTRO 3006 -',
    code: '175017',
    bulto: '60',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
  {
    name: 'BASE CIOCCA PLAST 3 TOMAS CON NEUTRO 1011 -',
    code: '175099',
    bulto: '25',
    image: '/images/Electricidad Nico - Ventas online_files/175081.jpg',
  },
];

function FeaturedProducts() {
  return (
    <section className="py-8 bg-gray-50" id="featured">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-orange-500">
            Featured Products
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Our most popular and high-quality electrical products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md hover:border-orange-400 bg-white group"
            >
              {/* Product Image */}
              <div className="overflow-hidden rounded-t-xl p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="px-3 pb-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500">
                  <span className="font-medium text-gray-700">Code:</span> {product.code}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  <span className="font-medium text-gray-700">Bulto:</span> {product.bulto}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-orange-500 text-white text-xs font-medium py-1.5 rounded-lg hover:bg-orange-600 hover:shadow-md hover:shadow-orange-200 transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-orange-500 text-orange-500 text-xs font-medium py-1.5 rounded-lg hover:bg-orange-500 hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
