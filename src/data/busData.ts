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
    "name": "Samalkot",
    "buses": {
      "441": {
        "destination": "Samalkot",
        "stops": ["College Gate", "Railway Station", "Bus Stand", "Market", "Samalkot"],
        "duration": "45 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Samalkot"
      },
      "440": {
        "destination": "Samalkot",
        "stops": ["College Gate", "Hospital", "Cinema Hall", "Post Office", "Samalkot"],
        "duration": "50 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Samalkot"
      },
      "416": {
        "destination": "Samalkot",
        "stops": ["College Gate", "Temple", "School", "Bank", "Samalkot"],
        "duration": "40 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Samalkot"
      },
      "472": {
        "destination": "Samalkot",
        "stops": ["College Gate", "Police Station", "Park", "Shopping Complex", "Samalkot"],
        "duration": "55 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Samalkot"
      }
    }
  },
  {
    "name": "Kakinada",
    "buses": {
      "501": {
        "destination": "Kakinada",
        "stops": ["College Gate", "Highway Junction", "Petrol Pump", "City Center", "Kakinada"],
        "duration": "1 hour 20 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Kakinada"
      },
      "502": {
        "destination": "Kakinada",
        "stops": ["College Gate", "Village Road", "Bridge", "Market Area", "Kakinada"],
        "duration": "1 hour 30 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Kakinada"
      },
      "515": {
        "destination": "Kakinada",
        "stops": ["College Gate", "Industrial Area", "Port Road", "Beach Road", "Kakinada"],
        "duration": "1 hour 15 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Kakinada"
      }
    }
  },
  {
    "name": "Rajamundry",
    "buses": {
      "601": {
        "destination": "Rajamundry",
        "stops": ["College Gate", "National Highway", "Toll Plaza", "Bridge", "Rajamundry"],
        "duration": "2 hours",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Rajamundry"
      },
      "615": {
        "destination": "Rajamundry",
        "stops": ["College Gate", "State Highway", "Village Center", "Bus Terminal", "Rajamundry"],
        "duration": "2 hours 15 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Rajamundry"
      }
    }
  },
  {
    "name": "Peddapuram",
    "buses": {
      "301": {
        "destination": "Peddapuram",
        "stops": ["College Gate", "Old Checkpost", "Rice Mill", "Main Road", "Peddapuram"],
        "duration": "35 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Peddapuram"
      },
      "305": {
        "destination": "Peddapuram",
        "stops": ["College Gate", "Substation", "Bus Depot", "Clock Tower", "Peddapuram"],
        "duration": "40 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Peddapuram"
      }
    }
  },
  {
    "name": "Mandapeta",
    "buses": {
      "320": {
        "destination": "Mandapeta",
        "stops": ["College Gate", "Bridge Point", "Factory Road", "Town Center", "Mandapeta"],
        "duration": "50 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Mandapeta"
      },
      "324": {
        "destination": "Mandapeta",
        "stops": ["College Gate", "Bypass", "School Road", "Mandapeta Market", "Mandapeta"],
        "duration": "55 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Mandapeta"
      }
    }
  },
  {
    "name": "Ravulapalem",
    "buses": {
      "330": {
        "destination": "Ravulapalem",
        "stops": ["College Gate", "Nakkapalli", "Canal Road", "Fruit Market", "Ravulapalem"],
        "duration": "1 hour",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Ravulapalem"
      }
    }
  },
  {
    "name": "Amalapuram",
    "buses": {
      "350": {
        "destination": "Amalapuram",
        "stops": ["College Gate", "Bridge", "Kothapeta", "Bus Stand", "Amalapuram"],
        "duration": "1 hour 30 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Amalapuram"
      }
    }
  },
  {
    "name": "Tuni",
    "buses": {
      "375": {
        "destination": "Tuni",
        "stops": ["College Gate", "Railway Crossing", "Hill Road", "Town Square", "Tuni"],
        "duration": "1 hour 10 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Tuni"
      }
    }
  },
  {
    "name": "Annavaram",
    "buses": {
      "390": {
        "destination": "Annavaram",
        "stops": ["College Gate", "Bypass Road", "Temple Stop", "Hill Base", "Annavaram"],
        "duration": "1 hour 40 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Annavaram"
      }
    }
  },
  {
    "name": "Anaparthi",
    "buses": {
      "395": {
        "destination": "Anaparthi",
        "stops": ["College Gate", "Canal Junction", "Village Road", "Anaparthi Market", "Anaparthi"],
        "duration": "1 hour 5 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Anaparthi"
      }
    }
  }
]