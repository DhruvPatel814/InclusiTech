
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Users, Phone, BookOpen, Calendar, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    title: "24/7 Support Line",
    description: "Talk to a mental health professional anytime, anywhere. Free and confidential support available.",
    icon: Headphones,
    action: "Call Now",
    category: "urgent",
  },
  {
    title: "Support Groups",
    description: "Join online support groups and connect with others. Weekly sessions available for various topics.",
    icon: Users,
    action: "Join Group",
    category: "community",
  },
  {
    title: "Crisis Helpline",
    description: "Immediate support for crisis situations. Trained professionals ready to help 24/7.",
    icon: Phone,
    action: "Get Help",
    category: "urgent",
  },
  {
    title: "Self-Help Resources",
    description: "Access guides, articles, and materials for mental wellness and personal growth.",
    icon: BookOpen,
    action: "Read More",
    category: "self-help",
  },
  {
    title: "Schedule Therapy",
    description: "Book online therapy sessions with licensed professionals. Flexible scheduling available.",
    icon: Calendar,
    action: "Book Session",
    category: "professional",
  },
  {
    title: "Wellness Programs",
    description: "Join structured programs for stress management, anxiety, and depression.",
    icon: Heart,
    action: "Explore Programs",
    category: "self-help",
  },
];

export const MentalHealthResources = () => {
  const { toast } = useToast();

  const handleResourceClick = (title: string) => {
    toast({
      title: "Accessing Resource",
      description: `Connecting to ${title}...`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Mental Health Support</h2>
        <p className="mt-2 text-gray-600">
          Access a variety of mental health resources and support services
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.title} className="group p-6 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-healthcare-100 p-3 transition-colors group-hover:bg-healthcare-600 group-hover:text-white">
                <resource.icon className="h-6 w-6 text-healthcare-600 transition-colors group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
                <Button
                  className="mt-4 w-full bg-healthcare-600 hover:bg-healthcare-700"
                  onClick={() => handleResourceClick(resource.title)}
                >
                  {resource.action}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
