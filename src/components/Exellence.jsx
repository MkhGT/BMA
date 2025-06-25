const Exellence = () => {
  const excellence = [
    {
      title: "Eco-Friendly",
      description:
        "Our bamboo is harvested responsibly, reducing environmental impact and promoting sustainability.",
      iconClass: "ri-leaf-line text-emerald-600",
    },
    {
      title: "Healthy Living",
      description:
        "Bamboo is naturally antibacterial, making our products safe for food storage and everyday use.",
      iconClass: "ri-shield-check-line text-green-600",
    },
    {
      title: "Cultural Heritage",
      description:
        "Each item is handwoven by local artisans, preserving Indonesian traditions and supporting communities.",
      iconClass: "ri-hand-heart-line text-yellow-600",
    },
    {
      title: "Global Quality",
      description:
        "We meet international standards, ensuring our bamboo crafts are export-ready and world-class.",
      iconClass: "ri-global-line text-blue-600",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-32" id="excellence">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-16 text-gray-900">
          Our Excellence
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {excellence.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-5 md:w-[45%] lg:w-[48%] xl:w-[48%]"
            >
              <div className="text-4xl transition-transform hover:scale-110">
                <i className={`${item.iconClass}`}></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl text-center md:text-start font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exellence;
