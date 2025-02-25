
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section 
      className="relative py-20 sm:py-32"
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-slideUp flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Healthcare Accessibility
            <span className="text-healthcare-600"> For Everyone</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Empowering individuals with accessible healthcare solutions through AI-driven assistance, telemedicine, and comprehensive support systems.
          </p>
          <div className="mt-10 flex gap-4">
            <Button 
              size="lg"
              className="bg-healthcare-600 hover:bg-healthcare-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
