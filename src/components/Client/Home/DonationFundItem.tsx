import { getDonationFundData } from "@/data/DonationFundData";
import Container from "@/lib/Container";
import { Link } from "react-router-dom";
import DonationCard from "./DonationCard";

const DonationFundItem = () => {
  const donations = getDonationFundData();

  return (
    <section className="my-10">
      <Container>
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-8">
          Together, we create a better tomorrow.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {donations.slice(0, 6).map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/donate"
            aria-label="View all donation funds"
            className="text-green-600 hover:underline"
          >
            View All Funds
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default DonationFundItem;
