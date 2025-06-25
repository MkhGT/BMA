const Services = () => {
  const products = [
    {
      title: "Tampah",
      description:
        "A traditional mat used for winnowing rice and other foodstuffs.",
      image: "./assets/Tampah.jpg",
    },
    {
      title: "Irig",
      description: "Storage for crops or household goods.",
      image: "./assets/Tampah.jpg",
    },
    {
      title: "Bamboo Basket",
      description:
        "A multifunctional basket for the kitchen, market, and decoration.",
      image: "./assets/Tampah.jpg",
    },
  ];

  return (
    <section
      className="bg-white text-gray-800 py-16 px-6 lg:px-24"
      id="products"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xl md:text-3xl font-bold mb-4 leading-tight">
          Thoughtfully Designed, Naturally Inspired
        </h2>
        <p className="text-sm md:text-lg text-gray-600">
          Discover the beauty and purpose behind our bamboo products.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg group flex flex-col"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col justify-end flex-grow p-6 text-white">
              <div className="mt-auto">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-200 mb-4 text-justify">
                  {product.description}
                </p>
                <button className="px-4 py-2 bg-white text-gray-900 font-semibold text-sm rounded-md hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-in-out">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
