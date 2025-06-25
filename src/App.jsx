import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Exellence from "./components/Exellence";
import Services from "./components/Services";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Review from "./components/Review";

function App() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <About />
      <Exellence />
      <Services />
      <Review />
      <Contacts />
    </main>
  );
}

export default App;
