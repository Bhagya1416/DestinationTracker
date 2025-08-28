import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search, Bus, Navigation } from "lucide-react";
import { VillageCard } from "@/components/VillageCard";
import { BusNumberGrid } from "@/components/BusNumberGrid";
import { RouteDetails } from "@/components/RouteDetails";
import { villagesData } from "@/data/busData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVillage, setSelectedVillage] = useState<string | null>(null);
  const [selectedBus, setSelectedBus] = useState<string | null>(null);

  const filteredVillages = useMemo(() => {
    return villagesData.filter(village =>
      village.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const selectedVillageData = villagesData.find(v => v.name === selectedVillage);
  const busNumbers = selectedVillageData ? Object.keys(selectedVillageData.buses) : [];
  const selectedBusRoute = selectedVillageData && selectedBus ? selectedVillageData.buses[selectedBus] : null;

  const handleVillageSelect = (village: string) => {
    setSelectedVillage(village);
    setSelectedBus(null);
  };

  const handleBusSelect = (busNumber: string) => {
    setSelectedBus(busNumber);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-transport-blue to-transport-green">
                <Navigation className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-transport-blue to-transport-green bg-clip-text text-transparent">
                DestinationTracker
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">Track your route, Reach destination</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Search Section - Only show on home page */}
        {!selectedVillage && (
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search village names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base rounded-xl border-2 focus:border-transport-blue transition-colors"
              />
            </div>
          </div>
        )}

        {/* Villages Grid */}
        {!selectedVillage && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {filteredVillages.map((village) => (
                <VillageCard
                  key={village.name}
                  name={village.name}
                  onClick={() => handleVillageSelect(village.name)}
                  isSelected={selectedVillage === village.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bus Numbers Section */}
        {selectedVillage && !selectedBus && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Buses to {selectedVillage}</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <BusNumberGrid
                busNumbers={busNumbers}
                onBusSelect={handleBusSelect}
                selectedBus={selectedBus}
              />
            </div>
            <div className="text-center">
              <button
                onClick={() => setSelectedVillage(null)}
                className="text-transport-blue hover:underline"
              >
                ← Back to destinations
              </button>
            </div>
          </div>
        )}

        {/* Route Details Section */}
        {selectedVillage && selectedBus && selectedBusRoute && (
          <div className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <RouteDetails
                busNumber={selectedBus}
                route={selectedBusRoute}
              />
            </div>
            <div className="text-center space-x-4">
              <button
                onClick={() => setSelectedBus(null)}
                className="text-transport-blue hover:underline"
              >
                ← Back to buses
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => {
                  setSelectedVillage(null);
                  setSelectedBus(null);
                }}
                className="text-transport-blue hover:underline"
              >
                Back to destinations
              </button>
            </div>
          </div>
        )}

        {/* No Results */}
        {searchTerm && filteredVillages.length === 0 && (
          <div className="text-center py-8">
            <Bus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No villages found</h3>
            <p className="text-muted-foreground">Try searching for a different destination</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
