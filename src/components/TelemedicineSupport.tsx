
import { CalendarClock, Video, Stethoscope, ClipboardList } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    available: true,
    nextSlot: "2:30 PM Today",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    available: false,
    nextSlot: "10:00 AM Tomorrow",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Psychiatrist",
    available: true,
    nextSlot: "4:15 PM Today",
  },
];

export const TelemedicineSupport = () => {
  const { toast } = useToast();

  const handleBooking = (doctorName: string) => {
    toast({
      title: "Booking in Progress",
      description: `Scheduling appointment with ${doctorName}...`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Telemedicine Services</h2>
        <p className="mt-2 text-gray-600">
          Connect with healthcare professionals from the comfort of your home
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-healthcare-100 p-3">
              <Video className="h-6 w-6 text-healthcare-600" />
            </div>
            <h3 className="font-semibold">Video Consultation</h3>
            <p className="text-sm text-gray-600">Face-to-face online meetings</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-healthcare-100 p-3">
              <CalendarClock className="h-6 w-6 text-healthcare-600" />
            </div>
            <h3 className="font-semibold">Flexible Scheduling</h3>
            <p className="text-sm text-gray-600">Book appointments 24/7</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-healthcare-100 p-3">
              <Stethoscope className="h-6 w-6 text-healthcare-600" />
            </div>
            <h3 className="font-semibold">Expert Care</h3>
            <p className="text-sm text-gray-600">Licensed professionals</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-healthcare-100 p-3">
              <ClipboardList className="h-6 w-6 text-healthcare-600" />
            </div>
            <h3 className="font-semibold">Digital Prescriptions</h3>
            <p className="text-sm text-gray-600">E-prescriptions available</p>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Available Doctors</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{doctor.name}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      doctor.available
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {doctor.available ? "Available" : "Busy"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
                <p className="text-sm">Next available: {doctor.nextSlot}</p>
                <Button
                  className="w-full"
                  variant={doctor.available ? "default" : "outline"}
                  onClick={() => handleBooking(doctor.name)}
                >
                  Book Appointment
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
