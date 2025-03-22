import Container from "@/lib/Container";
import { Link } from "react-router-dom";

const LinkText = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link className="text-blue-400 hover:text-blue-500" to={to}>
    {children}
  </Link>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-6">
      <Container>
        <div className="flex items-center justify-center flex-col">
          <p className="text-lg font-light text-center">
            Copyright © {year}{" "}
            <LinkText to="/">Nihams Foundation</LinkText> - all rights reserved. Design and Develop by{" "}
            <LinkText to="https://www.linkedin.com/in/ahshanhabib26/">Ahshan Habib</LinkText>.
          </p>
          <p className="text-lg font-light">
            <LinkText to="/">Terms and conditions</LinkText> |{" "}
            <LinkText to="/">Privacy Policy</LinkText>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
