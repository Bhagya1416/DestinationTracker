import { Button } from "@/components/ui/button";
import { Bus } from "lucide-react";

interface BusNumberGridProps {
  busNumbers: string[];
  onBusSelect: (busNumber: string) => void;
  selectedBus?: string;
}

export const BusNumberGrid = ({ busNumbers, onBusSelect, selectedBus }: BusNumberGridProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto">
      {busNumbers.map((busNumber) => (
        <Button
          key={busNumber}
          variant="bus"
          size="lg"
          onClick={() => onBusSelect(busNumber)}
          className={`flex items-center gap-3 h-16 justify-start px-6 ${
            selectedBus === busNumber ? 'bg-transport-blue text-white' : ''
          }`}
        >
          <Bus className="h-5 w-5" />
          <span className="font-semibold text-lg">Bus {busNumber}</span>
        </Button>
      ))}
    </div>
  );
};