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
    <>
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
              <button
                type="button"
                className="px-8 py-2 bg-blue-500 rounded-xl text-white"
              >
                Hire Me
              </button>
              <button className="flex items-center space-x-2 border border-blue-500 px-7 rounded-xl text-blue-500">
                Download CV <FiDownload />
              </button>
            </div>
          </div>
          <div className="w-2/5 -z-10">
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
      <div className="bg-[#f8f9fa] h-34 block absolute w-full">
        <div className="container block -mt-32">
          <div className="bg-white border flex p-5 rounded-xl">
            <div className="p-5 bg-[#f8f9fa] rounded-xl w-1/4">
              <h2 className="border-b-2 border-dashed border-gray-300 pb-3">
                Personal Details
              </h2>
              <div className="mt-3 text-sm">
                <p className="mb-2">
                  Email: <span className="text-gray-500">mtushar53@gmail.com</span>
                </p>
                <p className="mb-2">
                  Language: <span className="text-gray-500">English</span>
                </p>
                <p className="mb-2">
                  Email: <span className="text-gray-500">mtushar53@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="px-5 w-3/4">
              <h4 className="text-2xl leading-normal mb-2 pt-3">I Am</h4>
              <p className="text-sm text-gray-500 mb-3">
                Obviously I am a Web Designer. Web Developer with over 3 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <Image
                src="/assets/signature.png"
                alt="signature"
                width={300}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] pt-40 pb-20">
        <div className="container">
          <div className="text-center pb-12">
            <h2 className="text-3xl mb-5">Awesome Service</h2>
            <p className="max-w-xl mx-auto text-sm text-gray-500">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-32">
        <div className="flex justify-center items-center">
          <div className="w-1/3 p-3">
            <h1 className="text-3xl mb-5">Work Participation</h1>
            <p className="text-gray-500 text-sm pr-4">Obviously I am a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
          </div>
          <div className="w-2/3">
            <div className="flex justify-between w-4/5 mr-auto border border-dashed p-5 pl-32 mb-5 rounded-tl-full">
              <div>
                <h2 className="mb-2">Software Engineer</h2>
                <p className="mb-2">Shajgoj Limited</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum</p>
              </div>
              <p>2020 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
