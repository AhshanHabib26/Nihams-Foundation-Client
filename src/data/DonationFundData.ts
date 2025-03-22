// Definition: Data for donation funds
import healthFund from "@/assets/icons/healthcare.png"
import educationFund from "@/assets/icons/education.png"
import foodFund from "@/assets/icons/diet.png"
import shelterFund from "@/assets/icons/shelter.png"
import clothingFund from "@/assets/icons/brand.png"
import cleanWaterFund from "@/assets/icons/water-purification.png"
import disasterFund from "@/assets/icons/natural-disaster.png"
import veteranFund from "@/assets/icons/veteran.png"
import animalFund from "@/assets/icons/wild-animals.png"
import environmentFund from "@/assets/icons/planet-earth.png"
import childFund from "@/assets/icons/chase.png"
import elederlyFund from "@/assets/icons/elderly.png"

const data = [
  {
    id: "1",
    title: "Health Fund",
    description: "Your donation will help us to provide medical facilities to the needy people. Health is wealth. We need your support and donation.",
    image: healthFund,
    link: "/donate/health-fund"
  },
  {
    id: "2",
    title: "Education Fund",
    description: "Your donation will help us to provide education to the needy children. Education is a basic right of every child.",
    image: educationFund,
    link: "/donate/education-fund"
  },
  {
    id: "3",
    title: "Food Fund",
    description: "Your donation will help us to provide food to the needy people. Food is a basic need of human. we need your support.",
    image: foodFund,
    link: "/donate/food-fund"
  },
  {
    id: "4",
    title: "Shelter Fund",
    description: "Your donation will help us to provide shelter to the needy people. Stay safe, stay home.",
    image: shelterFund,
    link: "/donate/shelter-fund"
  },
  {
    id: "5",
    title: "Clothing Fund",
    description: "Your donation will help us to provide clothing to the needy people. Specially in winter season.",
    image: clothingFund,
    link: "/donate/clothing-fund"
  },
  {
    id: "6",
    title: "Clean Water Fund",
    description: "Your donation will help us to provide clean water to the needy people. Water is life.",
    image: cleanWaterFund,
    link: "/donate/clean-water-fund"
  },
  {
    id: "7",
    title: "Disaster Relief Fund",
    description: "Your donation will help us to provide relief to the people affected by natural disasters.",
    image: disasterFund,
    link: "/donate/disaster-relief-fund"
  },
  {
    id: "8",
    title: "Veteran Fund",
    description: "Your donation will help us to provide support to the veterans who served the country.",
    image: veteranFund,
    link: "/donate/veteran-fund"
  },
  {
    id: "9",
    title: "Animal Fund",
    description: "Your donation will help us to provide food and shelter to the animals in need.",
    image: animalFund,
    link: "/donate/animal-fund"
  },
  {
    id: "10",
    title: "Environment Fund",
    description: "Your donation will help us to protect the environment and wildlife.",
    image: environmentFund,
    link: "/donate/environment-fund"
  },
  {
    id: "11",
    title: "Child Fund",
    description: "Your donation will help us to provide support to the children in need.",
    image: childFund,
    link: "/donate/child-fund"
  },
  {
    id: "12",
    title: "Elderly Fund",
    description: "Your donation will help us to provide support to the elderly people in need.",
    image: elederlyFund,
    link: "/donate/elderly-fund"
  }
]

export const getDonationFundData = () => {
  return data
}