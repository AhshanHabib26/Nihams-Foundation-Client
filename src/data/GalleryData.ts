import education from "@/assets/images/education.jpg"
import zakat from "@/assets/images/zakat.jpg"
import health from "@/assets/images/health.jpg"
import food from "@/assets/images/food.jpg"
import shelter from "@/assets/images/shelter.jpg"
import palestine from "@/assets/images/palestine.jpg"




const data = [
  {
    id: "1",
    title: "Zakat 2025",
    imageUrl: zakat
  },
  {
    id: "2",
    title: "Education 2025",
    imageUrl: education
  },
  {
    id: "3",
    title: "Health 2025",
    imageUrl: health
  },
  {
    id: "4",
    title: "Food 2025",
    imageUrl: food
  },
  {
    id: "5",
    title: "Shelter 2025",
    imageUrl: shelter
  },
  {
    id: "6",
    title: "Palestine",
    imageUrl: palestine
  }
]


export const GalleryData = () => {
  return data
}