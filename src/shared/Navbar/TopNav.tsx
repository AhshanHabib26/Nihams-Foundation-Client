import { Button } from "@/components/ui/button"
import Container from "@/lib/Container"
import { FaEnvelope, FaFacebook, FaPhone, FaSun, FaYoutube } from "react-icons/fa6"

const TopNav = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex space-x-3 cursor-pointer">
            <FaFacebook size={18} className=" hover:text-blue-500" />
            <FaYoutube size={18} className=" hover:text-red-500" />
            <FaEnvelope size={18} className=" hover:text-orange-500" />
            <FaPhone size={18} className=" hover:text-green-500" />
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <FaSun color="orange" />
            </div>
            <div className="flex items-center">
              <Button size="sm" className="bg-green-500 rounded-none cursor-pointer">EN</Button>
              <Button size="sm" className=" bg-white text-black rounded-none cursor-pointer">বাংলা</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopNav