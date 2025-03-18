import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getDonationFundData } from "@/data/DonationFundData";
import Container from "@/lib/Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DonationForm = () => {
  const donationFunds = getDonationFundData();
  const inputClass = "h-[45px] w-full";

  return (
    <div className="my-8">
      <Container>
        <div className="max-w-3xl mx-auto bg-white shadow p-5 rounded-lg border border-gray-200 border-dashed">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Select>
              <SelectTrigger className=" min-h-[45px] w-full">
                <SelectValue placeholder="Select Fund" />
              </SelectTrigger>
              <SelectContent>
                {donationFunds.map((item) => (
                  <SelectItem key={item.id} value={item.title} className="text-lg">
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input type="text" placeholder="Phone Number" className={inputClass} />
            <Input type="text" placeholder="Donation Amount" className={inputClass} />
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-500 mt-5 lg:mt-4 h-[45px] text-lg select-none font-normal">
            Donate
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DonationForm;
