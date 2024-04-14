import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/home/Hero';
import Products from '@/components/(pages)/home/Products';
import Features from '@/components/(pages)/home/Features';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />

      </main>
      <Footer />
    </>
  );
}
