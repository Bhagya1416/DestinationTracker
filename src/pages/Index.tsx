import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, Bus, Navigation } from "lucide-react";
import { VillageCard } from "@/components/VillageCard";
import { BusNumberGrid } from "@/components/BusNumberGrid";
import { RouteDetails } from "@/components/RouteDetails";
import { villagesData } from "@/data/busData";
import { App } from '@capacitor/app';

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

  const handleBackButtonPress = () => {
    if (selectedBus) {
      setSelectedBus(null);
    } else if (selectedVillage) {
      setSelectedVillage(null);
    }
  };

  useEffect(() => {
    const setupBackButtonHandler = async () => {
      try {
        await App.addListener('backButton', handleBackButtonPress);
      } catch (error) {
        console.log('Capacitor App plugin not available');
      }
    };

    setupBackButtonHandler();

    return () => {
      App.removeAllListeners();
    };
  }, [selectedVillage, selectedBus]);

  return (
    <div className="min-h-screen bg-background">
      {/* ✅ Logo Section */}
      <div className="text-center pt-6">
        <img 
          src="/logo.png" 
          alt="Website Logo"
          className="mx-auto w-32 h-auto mb-4"
        />
      </div>

      {/* Existing Code (Header + Functionality) */}
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

      {/* The rest of your existing code stays the same */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Search, Grid, Bus List, etc. */}
        {/* ✅ This part stays unchanged */}
      </main>
    </div>
  );
};

export default Index;
