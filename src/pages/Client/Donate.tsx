import DonationCard from "@/components/Client/Home/DonationCard";
import { getDonationFundData } from "@/data/DonationFundData";
import Container from "@/lib/Container";

// Donate Page Component
const DonatePage = () => {
  const donations = getDonationFundData();

  return (
    <section className="my-10">
      <Container>
        <h1 className="bg-green-100 p-4 rounded-lg text-center text-2xl font-semibold text-gray-700 mb-8">
          Together, we create a better tomorrow.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {donations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DonatePage;
