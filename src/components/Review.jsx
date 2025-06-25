import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Jane Doe.",
      message:
        "We are proud to partner with Barayasa. Their bamboo quality and commitment to sustainability is outstanding.",
      location: "Japan",
    },
    {
      name: "John Doe",
      message:
        "The cultural value and authenticity behind each piece is what sets them apart in the global market.",
      location: "Australia",
    },
    //   {
    //     name: "EthnoHome Europe",
    //     message:
    //       "Reliable exports, great communication, and artisan-level craftsmanship. Highly recommended.",
    //     location: "Germany",
    //   },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32" id="review">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-12 text-gray-900">
        What Our Partners Say
      </h2>
      <div className="grid md:grid-cols-2 justify-center gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-700 italic mb-4">“{review.message}”</p>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm font-semibold text-gray-800">
              {review.name}
              <span className="text-gray-500"> – {review.location}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
