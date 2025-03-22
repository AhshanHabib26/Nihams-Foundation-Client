
import palestineImg from "@/assets/images/palestine.jpg"
import foodImg from "@/assets/images/foodDonations.jpg"
import buyOneGiveOneImg from "@/assets/images/buyOne.jpg"
import supportImg from "@/assets/images/shelter.jpg"

const data = [
  {
    id: "1",
    title: "Stands with the people of Palestine",
    slug: "stands-with-the-people-of-palestine",
    date: "May 15, 2025",
    content: "Nihams Foundation stands with the people of Palestine. We are deeply saddened by the loss of innocent lives and the destruction of homes and infrastructure. We call for an immediate ceasefire and a peaceful resolution to the conflict. Our thoughts and prayers are with the people. We are working with our partners to provide emergency relief to those affected by the violence. We urge the international community to take action to end the violence and protect the rights of the Palestinian people. We stand in solidarity with the people.",
    image: palestineImg
  },
  {
    id: "2",
    title: "Launch of Emergency Relief",
    slug: "launch-of-emergency-relief",
    date: "May 15, 2025",
    content: "Nihams Foundation launches emergency relief for the people. We are working with our partners to provide food, water, shelter, and medical care to those affected by the violence. We are also providing psychosocial support to help people cope with the trauma of the conflict. Our teams are on the ground, working around the clock to deliver aid to those in need. We are committed to helping the people rebuild their lives and communities. We urge the international community to support our efforts and to take action to end the violence and protect the rights of the people.",
    image: foodImg
  },
  {
    id: "3",
    title: "Buy One, Give One Campaign",
    slug: "buy-one-give-one-campaign",
    date: "May 15, 2025",
    content: "Nihams Foundation is launching a Buy One, Give One campaign to support the people. For every product purchased, we will donate a product to those in need. We are working with our partners to provide food, water, shelter, and medical care to those affected by the violence. We are also providing psychosocial support to help people cope with the trauma of the conflict. Our teams are on the ground, working around the clock to deliver aid to those in need. We are committed to helping the people rebuild their lives and communities. We urge the international community to support our efforts and to take action to end the violence and protect the rights of the people.",
    image: buyOneGiveOneImg
  },
  {
    id: "4",
    title: "Support for the people affected by the violence",
    slug: "support-for-the-people-affected-by-the-violence",
    date: "May 15, 2025",
    content: "Nihams Foundation is providing support for the people affected by the violence. We are working with our partners to provide food, water, shelter, and medical care to those in need. We are also providing psychosocial support to help people cope with the trauma of the conflict. Our teams are on the ground, working around the clock to deliver aid to those in need. We are committed to helping the people rebuild their lives and communities. We urge the international community to support our efforts and to take action to end the violence and protect the rights of the people.",
    image: supportImg
  }
]

export const NewsData = () => {
  return data
}