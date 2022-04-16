import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [atTopOfPage, setAtTopOfPage] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div>
      <nav
        className={`fixed hidden md:flex w-full items-center justify-between flex-wrap p-7 m-auto top-0 animated transition ease-in duration-300 ${
          atTopOfPage ? "" : "scrolled"
        }`}
      >
        <div className="container flex justify-between">
          <h2>Tushar</h2>
          <div className="flex space-x-6">
            <Link href="#home">
              <a className="hover:text-blue-500">Home</a>
            </Link>
            <Link href="#services">
              <a className="hover:text-blue-500">Services</a>
            </Link>
            <Link href="#resume">
              <a className="hover:text-blue-500">Resume</a>
            </Link>
            <Link href="#projects">
              <a className="hover:text-blue-500">Projects</a>
            </Link>
            <Link href="#blog">
              <a className="hover:text-blue-500">Blog</a>
            </Link>
            <Link href="#contact">
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
              <a className="flex items-center text-blue-500">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="mobileMenu md:hidden">
        <Link href="/">
          <a>
            <span>hirakib</span>.me
          </a>
        </Link>

        <div className="d-inline" onClick={() => setMobileMenuOpen(true)}>
          <span className="mobileMenuText">Menu</span>
          <Image
            src="/images/menu.jpeg"
            alt="mobile-logo"
            width={28}
            height={12}
          />
        </div>
        <div
          className={"mobileMenuList" + (mobileMenuOpen ? " active" : "")}
        >
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="mobileMenuClose"
          >
            <span>Close</span>
            <Image src="/images/close.png" alt="close" width={16} height={16} />
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
            <a className="contactBtn">
              Contact me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
