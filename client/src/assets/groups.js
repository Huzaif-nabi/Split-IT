const dummyGroup = [
  {
    "_id": "64f1b8e2234567890abc2222",
    "name": "Hackathon Team",
    "description": "Working on a hackathon project",
    "members": [
      { "userId": "64f1a7d1234567890abc1111", "balance": -200 }, // Huzaif owes Isha
      { "userId": "64f1a7d1234567890abc2222", "balance": 200 }   // Isha should get 200
    ],
    "when": "2025-09-05",
    "currency": "INR"
  },
  {
    "_id": "64f1b8e2234567890abc3333",
    "name": "Cricket Club",
    "description": "Weekend cricket buddies",
    "members": [
      { "userId": "64f1a7d1234567890abc1111", "balance": 500 },  // Huzaif is owed
      { "userId": "64f1a7d1234567890abc3333", "balance": -500 }  // John owes
    ],
    "when": "2025-09-10",
    "currency": "USD"
  },
  {
    "_id": "64f1b8e2234567890abc4444",
    "name": "College Project",
    "description": "Final year project expenses",
    "members": [
      { "userId": "64f1a7d1234567890abc1111", "balance": -120 },
      { "userId": "64f1a7d1234567890abc4444", "balance": 120 }
    ],
    "when": "2025-09-15",
    "currency": "EUR"
  },
  {
    "_id": "64f1b8e2234567890abc5555",
    "name": "Roommates",
    "description": "Shared rent and utilities",
    "members": [
      { "userId": "64f1a7d1234567890abc1111", "balance": 1500 },
      { "userId": "64f1a7d1234567890abc5555", "balance": -1500 }
    ],
    "when": "2025-09-20",
    "currency": "INR"
  },
  {
    "_id": "64f1b8e2234567890abc6666",
    "name": "Goa Trip",
    "description": "Trip expenses for Goa vacation",
    "members": [
      { "userId": "64f1a7d1234567890abc1111", "balance": -75 },
      { "userId": "64f1a7d1234567890abc6666", "balance": 75 }
    ],
    "when": "2025-09-25",
    "currency": "USD"
  },
  {
    "_id": "64f1b8e2234567890abc7777",
    "name": "Family Pool",
    "description": "Shared family contributions",
    "members": [
      { "userId": "64f1a7d1234567890abc1111", "balance": 5000 },
      { "userId": "64f1a7d1234567890abc7777", "balance": -5000 }
    ],
    "when": "2025-10-01",
    "currency": "INR"
  }
];

export default dummyGroup;
