import heroImage from "../assets/hero-image.jpg";

const About = () => {
  return (
    <section className="relative py-24 bg-white px-6 lg:px-32" id="about">
      <div className="mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6">About Us</h2>
        <p className="text-sm md:text-lg text-gray-600 leading-relaxed text-justify md:text-center">
          PT Barayasa Maizan Abadi is an Indonesian company that produces eco-friendly agricultural and handcrafted products. We offer traditional bamboo items such as woven trays (tampah), bread baskets (irig), and rice cooking baskets (bakul)—designed to blend everyday function with cultural heritage.

In addition to crafts, we also provide natural agricultural goods like dried Eucheuma cottonii seaweed and premium rice husks, supporting sustainable practices in food, farming, and wellness. Our mission is to empower communities through products that reflect the values of tradition, nature, and quality.
        </p>
      </div>
    </section>
  );
};

export default About;
