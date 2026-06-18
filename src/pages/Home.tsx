import Header from "../components/Header";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Spotlight from "../components/Spotlight";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Spotlight />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
