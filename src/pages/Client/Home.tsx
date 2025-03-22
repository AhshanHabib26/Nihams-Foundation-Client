import About from "@/components/Client/Home/About"
import Banner from "@/components/Client/Home/Banner"
import DonationForm from "@/components/Client/Home/DonationForm"
import DonationFundItem from "@/components/Client/Home/DonationFundItem"

const HomePage = () => {
  return (
    <div>
      <DonationForm />
      <Banner />
      <About />
      <DonationFundItem />
    </div>
  )
}

export default HomePage