import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { NBLinkFour, NBLinkOne, NBLinkThree, NBLinkTwo } from "../Constants";

const NavbarComponent = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            className="inline-flex items-center py-6 px-3 mr-4 text-orange-400 hover:text-white text-4xl font-bold cursive tracking-widest"
          >
            {NBLinkOne}
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-400 hover:text-white"
          >
            {NBLinkTwo}
          </NavLink>
          <NavLink
            to="/problems"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-400 hover:text-white"
          >
            {NBLinkThree}
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-400 hover:text-white"
          >
            {NBLinkFour}
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/chopra_aarat"
            className="mr-4"
            target="_blank"
            fgColor="#f4f4f4"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
