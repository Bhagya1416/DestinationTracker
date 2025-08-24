import { Button } from "@/components/ui/button";
import { Bus } from "lucide-react";

interface BusNumberGridProps {
  busNumbers: string[];
  onBusSelect: (busNumber: string) => void;
  selectedBus?: string;
}

export const BusNumberGrid = ({ busNumbers, onBusSelect, selectedBus }: BusNumberGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {busNumbers.map((busNumber) => (
        <Button
          key={busNumber}
          variant="bus"
          size="lg"
          onClick={() => onBusSelect(busNumber)}
          className={`flex flex-col items-center gap-2 h-20 ${
            selectedBus === busNumber ? 'bg-transport-blue text-white' : ''
          }`}
        >
          <Bus className="h-5 w-5" />
          <span className="font-semibold">{busNumber}</span>
        </Button>
      ))}
    </div>
  );
};