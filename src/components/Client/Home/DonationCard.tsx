import { Link } from "react-router-dom";

interface Donation {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const DonationCard = ({ donation }: { donation: Donation }) => {
  return (
    <div className="shadow-md border border-gray-100 rounded-md hover:shadow-2xl transition-shadow cursor-pointer">
      <img
        className="w-20 h-24 mx-auto py-2"
        src={donation.image}
        alt={donation.title}
      />
      <div className="p-4 text-center border-t border-gray-200 border-dashed">
        <h2 className="text-xl font-semibold text-gray-700">{donation.title}</h2>
        <p className="text-gray-600">{donation.description}</p>
      </div>
      <Link
        to={donation.link}
        aria-label={`Donate to ${donation.title}`}
        className="block p-2 text-center bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-b-md transition-colors"
      >
        Donate Now
      </Link>
    </div>
  );
};

export default DonationCard;
