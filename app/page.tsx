import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import NewLetter from "./components/NewLetter";
import Product from "./components/Product";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <Product />
      <TestimonialSection />
      <NewLetter />
    </main>
  );
}
