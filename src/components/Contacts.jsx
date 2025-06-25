const Contacts = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-32" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          Reach out to us for export inquiries, partnerships, or product
          information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>📍 Address:</strong>
            <br />
            Jl. Jendral Sudirman No. 142/54, Kotabumi, Lampung, Indonesia
          </p>
          <p>
            <strong>📞 Phone:</strong>
            <br />
            +62 838-3382-0186
          </p>
          <p>
            <strong>✉️ Email:</strong>
            <br />
            barayasamaizanabadi@gmail.com
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
