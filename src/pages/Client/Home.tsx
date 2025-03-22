import About from "@/components/Client/Home/About"
import Banner from "@/components/Client/Home/Banner"
import DonationForm from "@/components/Client/Home/DonationForm"
import DonationFundItem from "@/components/Client/Home/DonationFundItem"
import OngoingProject from "@/components/Client/Home/OngoingProject"

const HomePage = () => {
  return (
    <div>
      <DonationForm />
      <Banner />
      <About />
      <DonationFundItem />
      <OngoingProject/>
    </div>
  )
}

export default HomePage