import About from "@/components/Client/Home/About"
import Banner from "@/components/Client/Home/Banner"
import DonationForm from "@/components/Client/Home/DonationForm"

const HomePage = () => {
  return (
    <div>
      <DonationForm />
      <Banner />
      <About/>
    </div>
  )
}

export default HomePage