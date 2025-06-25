import heroImage from "../assets/hero-image.jpg";

const About = () => {
  return (
    <section className="relative py-24 bg-white px-6 lg:px-32" id="about">
      <div className="mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6">About Us</h2>
        <p className="text-sm md:text-lg text-gray-600 leading-relaxed text-justify md:text-center">
          PT Barayasa Maizan Abadi is a bamboo craft company from Indonesia
          committed to sustainability, culture, and community empowerment. We
          produce handcrafted items like tampah, irig, and bamboo baskets that
          reflect the soul of Indonesian tradition and the beauty of natural
          materials.
        </p>
      </div>
    </section>
  );
};

export default About;
