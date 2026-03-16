import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Coverage from "@/components/Coverage";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Coverage />
      <Products />
      <Benefits />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
