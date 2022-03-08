import Image from "next/image";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Web Developer", "Web Designer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      autoInsertCss: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="container flex pt-40">
        <div className="w-3/5 mt-4 py-16">
          <div className="p-3 bg-white w-1/3 border border-gray-200 rounded-3xl text-sm text-center">
            Looking for a Developer !
          </div>
          <div className="flex mt-5">
            <h2 className="text-5xl pr-4 font-bold">I Am</h2>
            <h2 className="text-5xl text-blue-500 font-bold" ref={el} />
          </div>
          <p className="mt-4 text-gray-400">
            Obviously I am a Web Designer. Web Developer with over 3 years of
            experience. Experienced with all stages of the development
          </p>
          <div className="mt-7 flex space-x-6">
            <button type="button" className="px-8 py-2 bg-blue-500 rounded-xl text-white">Hire Me</button>
            <button className="flex items-center space-x-2 border border-blue-500 px-7 rounded-xl text-blue-500">Download CV <FiDownload/></button>
          </div>
        </div>
        <div className="w-2/5">
          <Image
            src="/assets/home.png"
            alt="home"
            layout="responsive"
            width={526}
            height={809}
          />
        </div>
      </div>
    </div>
  );
}
