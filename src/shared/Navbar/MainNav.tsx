import logoImg from "@/assets/icons/donation.png";
import Container from "@/lib/Container";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Projects", path: "/" },
  { name: "Ongoing Projects", path: "/" },
  { name: "Blogs", path: "/" },
  { name: "Membership", path: "/" },
  { name: "Contact", path: "/" },
];

const MainNav = () => {
  return (
    <div className="shadow-md py-4">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img className="size-8" src={logoImg} alt="Nihams Foundation" />
            <p className="text-xl font-bold uppercase text-gray-700">Nihams Foundation</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav className="flex items-center space-x-4 text-lg font-semibold text-gray-700">
              {NAV_LINKS.map(({ name, path }) => (
                <Link key={name} className="hover:text-green-600" to={path}>{name}</Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden sm:block">
            <Sheet>
              <SheetTrigger>
                <FaBars className="text-2xl text-gray-700 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center space-x-1">
                      <img className="size-7" src={logoImg} alt="Nihams Foundation" />
                      <p className="text-lg font-medium uppercase text-gray-700">Nihams Foundation</p>
                    </div>
                  </SheetTitle>
                  <hr className="mt-3 border-gray-200 border-dashed" />
                  <SheetDescription>
                    <nav>
                      {NAV_LINKS.map(({ name, path }) => (
                        <Link key={name} className="block py-1 text-lg font-medium text-gray-700 hover:text-green-600" to={path}>{name}</Link>
                      ))}
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainNav;