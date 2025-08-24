import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Route } from "lucide-react";

interface RouteDetailsProps {
  busNumber: string;
  route: {
    destination: string;
    stops: string[];
    duration: string;
    eveningTime: string;
    googleLocation: string;
  };
}

export const RouteDetails = ({ busNumber, route }: RouteDetailsProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Route className="h-5 w-5 text-transport-blue" />
          Bus {busNumber}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-transport-green" />
          <span className="font-medium">Destination:</span>
          <span>{route.destination}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-transport-green" />
          <span className="font-medium">Duration:</span>
          <span>{route.duration}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-transport-green" />
          <span className="font-medium">Evening bus starts at:</span>
          <span>{route.eveningTime}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-transport-green" />
          <span className="font-medium">Google Location:</span>
          <a href={route.googleLocation} target="_blank" rel="noopener noreferrer" className="text-transport-blue hover:underline">
            View on Google Maps
          </a>
        </div>
        
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Route className="h-4 w-4 text-transport-green" />
            Route Stops:
          </h4>
          <div className="space-y-2 ml-6">
            {route.stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-transport-blue"></div>
                <span className="text-sm">{stop}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};