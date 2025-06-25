const Hero = () => {
  return (
    <section
      className="
        bg-[url('./assets/hero-image.jpg')]
        bg-blend-darken
        bg-opacity-50
        bg-cover 
        bg-center 
        bg-no-repeat 
        h-[40vh] md:h-[80vh]
        relative mx-auto
        "
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative flex z-10 flex-col items-center justify-center h-full">
        {/* <img
          src="src\assets\logo.png"
          alt="Logo"
          className="w-[15vh] h-[15vh] md:w-[30vh] md:h-[30vh] mb-4"
        /> */}
        <h1 className="text-xl md:text-[3.5rem] uppercase font-bold font-bt text-white text-center">
          From the <span className="text-red-600">heart</span> of Indonesia
          <br />
          For the <span style={{ color: "var(--primary-color)" }}>world</span>
        </h1>
        <p className="text-white text-sm md:text-2xl text-center mt-2 px-4 md:px-0">
          "Eco-friendly, culturally rich, and globally trusted bamboo crafts."
        </p>
      </div>
    </section>
  );
};

export default Hero;
