
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Users, Phone, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    title: "24/7 Support Line",
    description: "Talk to a mental health professional anytime, anywhere.",
    icon: Headphones,
    action: "Call Now",
  },
  {
    title: "Support Groups",
    description: "Join online support groups and connect with others.",
    icon: Users,
    action: "Join Group",
  },
  {
    title: "Crisis Helpline",
    description: "Immediate support for crisis situations.",
    icon: Phone,
    action: "Get Help",
  },
  {
    title: "Self-Help Resources",
    description: "Access guides and materials for mental wellness.",
    icon: BookOpen,
    action: "Read More",
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
    <div className="grid gap-6 md:grid-cols-2">
      {resources.map((resource) => (
        <Card key={resource.title} className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-healthcare-100 p-3">
              <resource.icon className="h-6 w-6 text-healthcare-600" />
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
  );
};
