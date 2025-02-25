
import { useState } from "react";
import { Brain, MessageCircle, Phone, Video, Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MentalHealthResources } from "@/components/MentalHealthResources";
import { ChatSupport } from "@/components/ChatSupport";
import { TelemedicineSupport } from "@/components/TelemedicineSupport";
import { EmergencySupport } from "@/components/EmergencySupport";
import { Link } from "react-router-dom";

const HealthcareHub = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "mental-health" | "telemedicine" | "emergency">("chat");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Healthcare Hub
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Access healthcare support and resources from anywhere, anytime
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <Button
              variant={activeTab === "chat" ? "default" : "outline"}
              className="flex items-center justify-center gap-2 p-6"
              onClick={() => setActiveTab("chat")}
            >
              <MessageCircle className="h-5 w-5" />
              Chat Support
            </Button>
            <Button
              variant={activeTab === "telemedicine" ? "default" : "outline"}
              className="flex items-center justify-center gap-2 p-6"
              onClick={() => setActiveTab("telemedicine")}
            >
              <Video className="h-5 w-5" />
              Telemedicine
            </Button>
            <Button
              variant={activeTab === "mental-health" ? "default" : "outline"}
              className="flex items-center justify-center gap-2 p-6"
              onClick={() => setActiveTab("mental-health")}
            >
              <Brain className="h-5 w-5" />
              Mental Health
            </Button>
            <Button
              variant={activeTab === "emergency" ? "default" : "outline"}
              className="flex items-center justify-center gap-2 p-6"
              onClick={() => setActiveTab("emergency")}
            >
              <Phone className="h-5 w-5" />
              Emergency
            </Button>
          </div>

          {/* Content Area */}
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            {activeTab === "chat" && <ChatSupport />}
            {activeTab === "mental-health" && <MentalHealthResources />}
            {activeTab === "telemedicine" && <TelemedicineSupport />}
            {activeTab === "emergency" && <EmergencySupport />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareHub;
