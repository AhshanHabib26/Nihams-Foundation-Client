import zakatImg from "@/assets/images/zakat.jpg";
import educationImg from "@/assets/images/education.jpg";
import healthImg from "@/assets/images/health.jpg"; 
import foodImg from "@/assets/images/food.jpg";
import shelterImg from "@/assets/images/shelter.jpg";

const data = [
  {
    id: "1",
    title: "Zakat 2025",
    description: "Zakat 2025 is a project that aims to help the needy people in the year 2025. We are planning to collect a huge amount of money to help the needy people in the year 2025.",
    image: zakatImg,
    features: [
      "Helping the needy people",
      "Collecting money for the needy people",
      "Helping the needy people in the year 2025"
    ],
  },
  {
    id: "2",
    title: "Education 2025",
    description: "Education 2025 is a project that aims to help the students in the year 2025. We are planning to provide free education to the students in the year 2025.",
    image: educationImg,
    features: [
      "Providing free education to the students",
      "Helping the students in the year 2025",
      "Collecting money for the students"
    ],
  },
  {
    id: "3",
    title: "Health 2025",
    description: "Health 2025 is a project that aims to help the people in the year 2025. We are planning to provide free health services to the people in the year 2025.",
    image: healthImg,
    features: [
      "Providing free health services to the people",
      "Helping the people in the year 2025",
      "Collecting money for the health services"
    ],
  },
  {
    id: "4",
    title: "Food 2025",
    description: "Food 2025 is a project that aims to help the hungry people in the year 2025. We are planning to provide free food to the hungry people in the year 2025.",
    image: foodImg,
    features: [
      "Providing free food to the hungry people",
      "Helping the hungry people in the year 2025",
      "Collecting money for the food services"
    ],
  },
  {
    id: "5",
    title: "Shelter 2025",
    description: "Shelter 2025 is a project that aims to help the homeless people in the year 2025. We are planning to provide free shelter to the homeless people in the year 2025.",
    image: shelterImg,
    features: [
      "Providing free shelter to the homeless people",
      "Helping the homeless people in the year 2025",
      "Collecting money for the shelter services"
    ],
  }
]


export const OngoingProjectData = () => {
  return data
}