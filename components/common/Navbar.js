import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [atTopOfPage, setAtTopOfPage] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (atTopOfPage) setAtTopOfPage(false);
    } else {
      if (!atTopOfPage) setAtTopOfPage(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <nav
        className={`fixed hidden md:flex w-full items-center justify-between flex-wrap p-7 m-auto top-0 animated transition ease-in duration-300 ${
          atTopOfPage ? "" : "scrolled"
        }`}
      >
        <div className="container flex justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer logo"
          >
            <h2 className="text-2xl font-semibold">
              <span className="text-blue-400">hitushar</span>.me
            </h2>
          </Link>
          <div className="flex space-x-6 items-center">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <a className="hover:text-blue-500">Home</a>
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <a className="hover:text-blue-500">Services</a>
            </Link>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <a className="hover:text-blue-500">Resume</a>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <a className="hover:text-blue-500">Projects</a>
            </Link>
            {/* <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <a className="hover:text-blue-500">Blog</a>
            </Link> */}
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <a className="hover:text-blue-500">Contact</a>
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mtushar53/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-blue-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/mtushar53/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-blue-500"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.linkedin.com/in/mtushar53/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-blue-500"
              >
                <BsInstagram />
              </a>
              <a
                href="https://github.com/mtushar53"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-blue-500"
              >
                <BsGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`mobileMenu md:hidden fixed w-full items-center justify-between flex-wrap m-auto top-0 animated transition ease-in duration-300 ${
          atTopOfPage ? "" : "scrolled"
        }`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer logo"
        >
          <h2 className="font-semibold">
            <span className="text-blue-400">hitushar</span>.me
          </h2>
        </Link>

        <div className="flex" onClick={() => setMobileMenuOpen(true)}>
          {/* <span className="mobileMenuText">Menu</span> */}
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className={"mobileMenuList" + (mobileMenuOpen ? " active" : "")}>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="mobileMenuClose"
          >
            {/* <span>Close</span> */}
            <label htmlFor="checkClose">
              <input type="checkbox" id="checkClose" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <ul className="mobileMenuItems">
            <li>
              <Link href="/">
                <a onClick={() => setMobileMenuOpen(false)}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/ui-design">
                <a onClick={() => setMobileMenuOpen(false)}>UI Design</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a onClick={() => setMobileMenuOpen(false)}>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a onClick={() => setMobileMenuOpen(false)}>About Me</a>
              </Link>
            </li>
          </ul>
          <div className="contactSection">
            <h4>
              Lets work together for your{" "}
              <span className="d-block font-bold">business</span>
            </h4>
            <a className="contactBtn">Contact me</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
