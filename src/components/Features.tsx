
import { Brain, Heart, Headphones, Users } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Assistance",
    description: "Smart virtual assistance for personalized healthcare guidance and support.",
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Access to mental health resources and professional support when you need it.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock emergency assistance and healthcare guidance.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others, share experiences, and build supportive relationships.",
  },
];

export const Features = () => {
  return (
    <section 
      className="py-20 sm:py-32"
      aria-label="Features section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides accessible healthcare solutions designed to meet your unique needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
