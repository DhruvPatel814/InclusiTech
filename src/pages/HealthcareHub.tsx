
import { useState } from "react";
import { Brain, MessageCircle, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MentalHealthResources } from "@/components/MentalHealthResources";
import { ChatSupport } from "@/components/ChatSupport";

const HealthcareHub = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "mental-health">("chat");
  const { toast } = useToast();

  const handleTelemedicineClick = () => {
    toast({
      title: "Coming Soon",
      description: "Telemedicine appointments will be available soon!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Healthcare Hub
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Access healthcare support and resources from anywhere
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-6"
              onClick={() => setActiveTab("chat")}
            >
              <MessageCircle className="h-5 w-5" />
              Chat Support
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-6"
              onClick={handleTelemedicineClick}
            >
              <Video className="h-5 w-5" />
              Telemedicine
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-6"
              onClick={() => setActiveTab("mental-health")}
            >
              <Brain className="h-5 w-5" />
              Mental Health
            </Button>
          </div>

          {/* Content Area */}
          <div className="mt-8">
            {activeTab === "chat" ? (
              <ChatSupport />
            ) : (
              <MentalHealthResources />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareHub;
