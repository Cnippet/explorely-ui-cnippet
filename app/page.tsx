import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/home/Hero';
import Products from '@/components/(pages)/home/Products';
import Features from '@/components/(pages)/home/Features';
import Hiw from '@/components/(pages)/home/Hiw';
import Feedback from '@/components/(pages)/home/Feedback';
import Gallery from '@/components/(pages)/home/Gallery';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Hiw />
        <Feedback />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
