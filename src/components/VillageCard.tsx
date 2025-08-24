import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface VillageCardProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

export const VillageCard = ({ name, onClick, isSelected }: VillageCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isSelected ? 'ring-2 ring-primary shadow-lg' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-transport-light">
            <MapPin className="h-4 w-4 text-transport-green" />
          </div>
          <h3 className="font-medium text-foreground">{name}</h3>
        </div>
      </CardContent>
    </Card>
  );
};