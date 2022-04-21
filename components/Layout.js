import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [atTopOfPage, setAtTopOfPage] = useState(true);
  const handleScroll = () => {
    // when the user scrolls, check the pageYOffset
    if (window.pageYOffset > 400) {
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
      <Navbar />
      {children}
      <Footer />
      {!atTopOfPage && (
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <a
            href="javascript: void(0);"
            className="back-to-top btn btn-icon btn-soft-primary block rounded-md"
            id="back-to-top"
            // onClick="topFunction()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up icons"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </a>
        </Link>
      )}
    </div>
  );
}
