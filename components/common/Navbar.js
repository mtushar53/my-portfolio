import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Navbar() {
  const [atTopOfPage, setAtTopOfPage] = useState(true);

  const handleScroll = () => {
    // when the user scrolls, check the pageYOffset
    if (window.pageYOffset > 0) {
      // user is scrolled
      if (atTopOfPage) setAtTopOfPage(false);
    } else {
      // user is at top of page
      if (!atTopOfPage) setAtTopOfPage(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={`fixed flex w-full items-center justify-between flex-wrap p-7 m-auto top-0 animated transition ease-in duration-300 ${
        atTopOfPage ? "" : "scrolled"
      }`}
    >
      <div className="container flex justify-between">
        <h2>Tushar</h2>
        <div className="flex space-x-6">
          <a>Home</a>
          <a>Services</a>
          <a>Resume</a>
          <a>Projects</a>
          <a>Blog</a>
          <a>Contact</a>
          <div className="flex space-x-4">
            <a className="flex items-center text-blue-500">
              <FaFacebookF />
            </a>
            <a className="flex items-center text-blue-500">
              <BsLinkedin />
            </a>
            <a className="flex items-center text-blue-500">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
