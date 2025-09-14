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
  },
  {
    "name": "Gollaprolu",
    "buses": {
      "410": {
        "destination": "Gollaprolu",
        "stops": ["College Gate", "Canal Road", "Bypass", "Market", "Gollaprolu"],
        "duration": "50 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Gollaprolu"
      }
    }
  },
  {
    "name": "Yeleswaram",
    "buses": {
      "420": {
        "destination": "Yeleswaram",
        "stops": ["College Gate", "NH Road", "Village Circle", "Bus Stand", "Yeleswaram"],
        "duration": "55 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Yeleswaram"
      }
    }
  },
  {
    "name": "Pithapuram",
    "buses": {
      "430": {
        "destination": "Pithapuram",
        "stops": ["College Gate", "Railway Station", "Temple Road", "Main Market", "Pithapuram"],
        "duration": "45 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Pithapuram"
      }
    }
  },
  {
    "name": "Kattipudi",
    "buses": {
      "435": {
        "destination": "Kattipudi",
        "stops": ["College Gate", "Highway Point", "Tea Junction", "Kattipudi"],
        "duration": "35 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Kattipudi"
      }
    }
  },
  {
    "name": "Prathipadu",
    "buses": {
      "445": {
        "destination": "Prathipadu",
        "stops": ["College Gate", "Crossroad", "Market Road", "Prathipadu"],
        "duration": "30 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Prathipadu"
      }
    }
  },
  {
    "name": "Kirlampudi",
    "buses": {
      "455": {
        "destination": "Kirlampudi",
        "stops": ["College Gate", "Rice Mill Road", "Temple", "Kirlampudi"],
        "duration": "40 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Kirlampudi"
      }
    }
  },
  {
    "name": "Jaggampeta",
    "buses": {
      "465": {
        "destination": "Jaggampeta",
        "stops": ["College Gate", "NH Junction", "Town Center", "Jaggampeta"],
        "duration": "25 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Jaggampeta"
      }
    }
  },
  {
    "name": "Ramachandrapuram",
    "buses": {
      "475": {
        "destination": "Ramachandrapuram",
        "stops": ["College Gate", "NH Side", "Town Entrance", "Bus Stand", "Ramachandrapuram"],
        "duration": "1 hour 15 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Ramachandrapuram"
      }
    }
  },
  {
    "name": "Dowleswaram",
    "buses": {
      "480": {
        "destination": "Dowleswaram",
        "stops": ["College Gate", "NH Bridge", "Canal Road", "Dowleswaram"],
        "duration": "1 hour 10 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Dowleswaram"
      }
    }
  },
  {
    "name": "Gokavaram",
    "buses": {
      "485": {
        "destination": "Gokavaram",
        "stops": ["College Gate", "Rural Road", "Bus Stop", "Gokavaram"],
        "duration": "35 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Gokavaram"
      }
    }
  },
  {
    "name": "Kovvur",
    "buses": {
      "490": {
        "destination": "Kovvur",
        "stops": ["College Gate", "Godavari Bridge", "Town Market", "Kovvur"],
        "duration": "1 hour 30 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Kovvur"
      }
    }
  },
  {
    "name": "Biccavolu",
    "buses": {
      "495": {
        "destination": "Biccavolu",
        "stops": ["College Gate", "NH Road", "Temple Area", "Biccavolu"],
        "duration": "20 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Biccavolu"
      }
    }
  },
  {
    "name": "Nidadavolu",
    "buses": {
      "500": {
        "destination": "Nidadavolu",
        "stops": ["College Gate", "NH Road", "Railway Station", "Town Market", "Nidadavolu"],
        "duration": "1 hour 25 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Nidadavolu"
      }
    }
  },
  {
    "name": "Devarapalli",
    "buses": {
      "505": {
        "destination": "Devarapalli",
        "stops": ["College Gate", "Bridge Point", "Temple Stop", "Market Road", "Devarapalli"],
        "duration": "30 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Devarapalli"
      }
    }
  },
  {
    "name": "Razole",
    "buses": {
      "510": {
        "destination": "Razole",
        "stops": ["College Gate", "NH Road", "Town Junction", "Bus Stand", "Razole"],
        "duration": "1 hour 50 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Razole"
      }
    }
  },
  {
    "name": "Mummidivaram",
    "buses": {
      "520": {
        "destination": "Mummidivaram",
        "stops": ["College Gate", "Canal Road", "Village Center", "Bus Stand", "Mummidivaram"],
        "duration": "1 hour 40 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Mummidivaram"
      }
    }
  },
  {
    "name": "Pithapuram East",
    "buses": {
      "525": {
        "destination": "Pithapuram East",
        "stops": ["College Gate", "Railway Crossing", "Temple Road", "Market Area", "Pithapuram East"],
        "duration": "50 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Pithapuram+East"
      }
    }
  },
  {
    "name": "Thondangi",
    "buses": {
      "530": {
        "destination": "Thondangi",
        "stops": ["College Gate", "Village Junction", "Main Road", "Town Center", "Thondangi"],
        "duration": "40 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Thondangi"
      }
    }
  },
  {
    "name": "Seethanagaram",
    "buses": {
      "535": {
        "destination": "Seethanagaram",
        "stops": ["College Gate", "NH Road", "Bridge Junction", "Bus Stop", "Seethanagaram"],
        "duration": "1 hour 10 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Seethanagaram"
      }
    }
  },
  {
    "name": "Alamuru",
    "buses": {
      "540": {
        "destination": "Alamuru",
        "stops": ["College Gate", "Temple Road", "Market Junction", "Alamuru"],
        "duration": "35 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Alamuru"
      }
    }
  },
  {
    "name": "Jaggampet",
    "buses": {
      "545": {
        "destination": "Jaggampet",
        "stops": ["College Gate", "Village Road", "Bus Stand", "Market", "Jaggampet"],
        "duration": "45 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Jaggampet"
      }
    }
  },
  {
    "name": "Gopalapuram",
    "buses": {
      "550": {
        "destination": "Gopalapuram",
        "stops": ["College Gate", "Canal Side", "Temple Stop", "Gopalapuram"],
        "duration": "50 minutes",
        "eveningTime": "4:30 PM",
        "googleLocation": "https://www.google.com/maps/dir/Surampalem/Gopalapuram"
      }
    }
  }
]
