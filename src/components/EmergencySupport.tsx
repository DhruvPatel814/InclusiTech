
import { Phone, Ambulance, Hospital, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const EmergencySupport = () => {
  const { toast } = useToast();

  const handleEmergencyCall = (service: string) => {
    toast({
      title: "Emergency Alert",
      description: `Connecting to ${service}...`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Emergency Support</h2>
        <p className="mt-2 text-gray-600">
          24/7 emergency services and immediate assistance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 border-red-200 bg-red-50">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-100 p-3">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-900">Emergency Hotline</h3>
                <p className="text-red-700">For immediate medical emergencies</p>
              </div>
            </div>
            <Button
              className="w-full bg-red-600 hover:bg-red-700"
              onClick={() => handleEmergencyCall("Emergency Hotline")}
            >
              Call Emergency Services
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-healthcare-100 p-3">
                <Ambulance className="h-6 w-6 text-healthcare-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ambulance Service</h3>
                <p className="text-gray-600">Request immediate transport</p>
              </div>
            </div>
            <Button
              className="w-full"
              onClick={() => handleEmergencyCall("Ambulance Service")}
            >
              Request Ambulance
            </Button>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-healthcare-100 p-3">
                <Hospital className="h-6 w-6 text-healthcare-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nearby Hospitals</h3>
                <p className="text-gray-600">Find emergency rooms near you</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Central Hospital:</strong> 2.3 miles away
              </p>
              <p className="text-sm">
                <strong>St. Mary's Medical Center:</strong> 3.1 miles away
              </p>
              <p className="text-sm">
                <strong>Community Emergency Care:</strong> 4.5 miles away
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-healthcare-100 p-3">
                <Stethoscope className="h-6 w-6 text-healthcare-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">First Aid Guide</h3>
                <p className="text-gray-600">Quick emergency response steps</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p>• Keep calm and assess the situation</p>
              <p>• Check for breathing and consciousness</p>
              <p>• Control any bleeding</p>
              <p>• Maintain body temperature</p>
              <p>• Wait for professional help</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

