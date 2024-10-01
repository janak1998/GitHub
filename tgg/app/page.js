import CarouselSection from "@/components/Carousel";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      <Services />

      <CarouselSection />

      <Guide />

      <FAQs />

      <Team />

      <Footer />

      <div className="bg-white dark:text-black text-center">
        Developed with 💖 by{" "}
        <Link
          href="https://github.com/janak1998"
          target="_blank"
          title="Janak Bohra Github"
        >
          Janak Bohra
        </Link>
      </div>
    </main>
  );
}
