import { getDonationFundData } from "@/data/DonationFundData"
import Container from "@/lib/Container"
import { Link } from "react-router-dom"

// Desc: Donate Page
const DonatePage = () => {
  const donations = getDonationFundData()
  return (
    <div className="my-10">
      <Container>
        <div>
          <h1 className="bg-green-100 p-4 rounded-lg text-center text-2xl font-semibold text-gray-700 mb-8">Together, we create a better tomorrow.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {donations.map(donation => (
              <div className=" shadow-md border border-gray-100 rounded-md hover:shadow-2xl cursor-pointer" key={donation.id}>
                <img className="w-[80px] h-[100px] mx-auto py-2" src={donation.image} alt={donation.title} />
                <div className="p-4 text-center border-t border-gray-200 border-dashed">
                  <h2 className="text-xl font-semibold text-gray-700">{donation.title}</h2>
                  <p>{donation.description}</p>
                </div>
                <div className="p-3 text-center bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-b-md">
                  <Link to={donation.link}>Donate Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DonatePage