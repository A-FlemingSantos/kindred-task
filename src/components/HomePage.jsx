import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Stats } from "./sections/Stats";
import { Footer } from "./sections/Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
};
