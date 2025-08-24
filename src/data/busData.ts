export interface BusRoute {
  destination: string;
  stops: string[];
  duration: string;
  eveningTime: string;
  googleLocation: string;
}

export interface VillageData {
  name: string;
  buses: {
    [busNumber: string]: BusRoute;
  };
}

export const villagesData: VillageData[] = [
  {
    name: "Samalkot",
    buses: {
      "441": {
        destination: "Samalkot",
        stops: ["College Gate", "Railway Station", "Bus Stand", "Market", "Samalkot"],
        duration: "45 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Samalkot"
      },
      "440": {
        destination: "Samalkot",
        stops: ["College Gate", "Hospital", "Cinema Hall", "Post Office", "Samalkot"],
        duration: "50 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Samalkot"
      },
      "416": {
        destination: "Samalkot",
        stops: ["College Gate", "Temple", "School", "Bank", "Samalkot"],
        duration: "40 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Samalkot"
      },
      "472": {
        destination: "Samalkot",
        stops: ["College Gate", "Police Station", "Park", "Shopping Complex", "Samalkot"],
        duration: "55 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Samalkot"
      }
    }
  },
  {
    name: "Kakinada",
    buses: {
      "501": {
        destination: "Kakinada",
        stops: ["College Gate", "Highway Junction", "Petrol Pump", "City Center", "Kakinada"],
        duration: "1 hour 20 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Kakinada"
      },
      "502": {
        destination: "Kakinada",
        stops: ["College Gate", "Village Road", "Bridge", "Market Area", "Kakinada"],
        duration: "1 hour 30 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Kakinada"
      },
      "515": {
        destination: "Kakinada",
        stops: ["College Gate", "Industrial Area", "Port Road", "Beach Road", "Kakinada"],
        duration: "1 hour 15 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Kakinada"
      }
    }
  },
  {
    name: "Rajamundry",
    buses: {
      "601": {
        destination: "Rajamundry",
        stops: ["College Gate", "National Highway", "Toll Plaza", "Bridge", "Rajamundry"],
        duration: "2 hours",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Rajamundry"
      },
      "615": {
        destination: "Rajamundry",
        stops: ["College Gate", "State Highway", "Village Center", "Bus Terminal", "Rajamundry"],
        duration: "2 hours 15 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Rajamundry"
      }
    }
  },
  {
    name: "Tuni",
    buses: {
      "301": {
        destination: "Tuni",
        stops: ["College Gate", "Main Road", "Junction", "Market", "Tuni"],
        duration: "35 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Tuni"
      },
      "305": {
        destination: "Tuni",
        stops: ["College Gate", "Village Path", "Temple", "School", "Tuni"],
        duration: "40 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Tuni"
      },
      "312": {
        destination: "Tuni",
        stops: ["College Gate", "Hospital Road", "Post Office", "Bus Stand", "Tuni"],
        duration: "30 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Tuni"
      }
    }
  },
  {
    name: "Yanam",
    buses: {
      "701": {
        destination: "Yanam",
        stops: ["College Gate", "Coastal Road", "Ferry Point", "French Colony", "Yanam"],
        duration: "1 hour 45 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Yanam"
      },
      "715": {
        destination: "Yanam",
        stops: ["College Gate", "River Road", "Historical Site", "Port Area", "Yanam"],
        duration: "1 hour 50 minutes",
        eveningTime: "4:30 PM",
        googleLocation: "https://maps.google.com/?q=Yanam"
      }
    }
  }
];